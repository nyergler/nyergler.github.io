---
title: Using ECR images with Elastic Beanstalk and CodeBuild
date: 2019-11-11T17:11:11+00:00
categories:
  - startup
tags:
  - aws
  - CI
  - startup

---
As I mentioned [previously][1], I&#8217;ve been using CodePipeline and CodeBuild for continuous integration and delivery on a new project. For the most part I&#8217;ve been happy with it, but ran into an issue last week that took some experimenting to figure out.

In addition to CodePipeline and CodeBuild, we&#8217;re also using [Elastic Beanstalk][2] for deploying our application. I first experimented with Elastic Beanstalk when it was released, and at the time it had quite a few opinions about how to build an application. When I took another look a few months ago, though, I found that it has grown up considerably. The default model is still dumping your code on an EC2 host and managing the autoscaling group, but it also supports deploying arbitrary Docker images &#8212; both single images and ECS clusters. The [ability to use CodeBuild with Elastic Beanstalk][3] means you can utilize the same CI pipeline regardless of whether you&#8217;re deploying as the result of a web hook or as a one off from the command line.

This was working great until we started using a custom Docker image, hosted in the Elastic Container Registry (ECR), for our CodeBuild jobs. When we moved to that image, one-off builds broke with an error indicating CodeBuild couldn&#8217;t pull the Docker image from ECR (&#8220;Perhaps you need to login?&#8221; The error message helpfully suggested. Yes, perhaps.) This was pretty confusing, since I was able to confirm that both one-off and pipeline builds were using the same IAM Role, which had permission to fetch images from ECR (and was working from the pipeline). The AWS documentation iterates [the permissions you need in order to use ECR with CodeBuild][4], and indeed, that role had the proper permissions assigned.

As I experimented, though, I discovered that the issue was not the CodeBuild role, but rather the [ECR Repository Policy][5]. When executing CodeBuild as the result of `eb deploy`, the ECR repository must be configured to allow image pulls from the CodeBuild service. I suspect this is because `eb deploy` doesn&#8217;t execute as your existing CodeBuild project: it creates a new one with the source and output set to S3, runs the build, and tears it down after collecting the artifacts.

I was able to apply the policy with the following Terraform fragment:

    data "aws_iam_policy_document" "ecr_policy" {
      statement {
        sid    = "CodebuildPullPolicy"
        effect = "Allow"
        actions = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
        ]

        principals {
          type = "Service"
          identifiers = [
            "codebuild.amazonaws.com",
          ]
        }
      }
    }

    resource "aws_ecr_repository_policy" "build" {
      repository = "${aws_ecr_repository.build.name}" # the name of your ECR repository
      policy = "${data.aws_iam_policy_document.ecr_policy.json}"
    }


Once this was applied, Pipeline and command line builds both were able to pull the image.

 [1]: https://www.yergler.net/2019/10/17/continuous-integration-with-codebuild-and-codepipeline/
 [2]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html
 [3]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli-codebuild.html
 [4]: https://docs.aws.amazon.com/codebuild/latest/userguide/sample-ecr.html
 [5]: https://docs.aws.amazon.com/AmazonECR/latest/userguide/security_iam_service-with-iam.html