---
title: Continuous Integration with CodeBuild and CodePipeline
date: 2019-10-17T15:08:36.000Z
categories:
  - startup
tags:
  - aws
  - CI
  - testing
---
Last week I started on a new project --- venture, perhaps --- which
means I'm in the thick of figuring out all the things you take for granted when
you join an established project. I'm trying to balance pragmatism and
perfectionism: for example, I don't need to scale to 1MM users yet (I probably
don't need to scale to 10 yet), so spinning up a Kubernetes cluster doesn't make
sense. _And_, I'm not an animal, so it's not like I'm going to SSH into a
machine and build it by hand. So I'm trying to look at it from the perspective
of "what do we need for the next 3 months?"

One of the questions was about CI/CD. I've previously used Travis and Circle CI,
and they're both fine. They work, they have the features you want, they have
outages when you curse them, etc. As I was looking around, though, I came across
the AWS offerings: the confusingly named Code Build and Code Pipeline. (There's
also a Code Deploy; who could say why you'd chose a Deploy over, say, a
Pipeline?)

It took me a while to figure out how the two are different, and how they work
together. My present understanding is that Code Build provides "continuous
integration", and Code Pipeline provides "continuous delivery". In my past
experience these have been squished together into a single thing. Which is fine,
except that they're not _quite_ the same thing.

Continuous Integration (CI) ensures that your code builds, tests pass, etc
whenever you make a change. In other words, it ensures that your change
integrates with the existing code base.

Continuous Delivery (CD) takes your code and gets it onto servers. This may
involve deploying Docker containers, pushing Serverless code to Lambda, etc.

In the Code Build / Code Pipeline world, the Build is defined in the source
repository (much like the Circle or Travis configuration I've seen before), and
the Pipeline is configured as infrastructure, outside of the code. I'm using
[Terraform][1], which means I can also treat this as code, albeit in a different
language.

The Build is defined by a [`buildspec.yml`][2] file, which defines commands to
run for each phase. Unlike CircleCI, where you can define arbitrary steps, the
phases are more rigid here: install, pre-build, build, post-build. The build
spec also defines the artifacts that the build produces, and the artifacts are
what downstream processes can consume.

We're only two weeks in, but one thing that I _liked_ about CodeBuild is that
the pricing required very little thought: you pay per minute, regardless of how
many things you run. This is in contrast to CircleCI, where you have to think
about parallelism: it's free for one-at-a-time, but after that you pay per
parallel build. More specifically, you pay per _potential_ parallel build.

In our case the Pipeline takes the artifact from Code Build, and deploys it to
Elastic Beanstalk. I suspect Beanstalk is the first thing we'll throw away
infrastructure wise, but it's nice for now: we're able to configure an EC2
instance with everything running on it we need, and scale that up behind an ALB.
Because we're trying to describe all of our infrastructure with Terraform, the
hardest part was getting it to use an ALB rather than a classic ELB. This
required an [Option][3] to be defined in the Environment declaration:

```
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }
```

Overall I'm pretty happy with CodeBuild and CodePipeline. We've decided to
re-evaluate early decisions in a month or so, and I'll post an update about
whether we stick with it then.

 [1]: https://terraform.io
 [2]: https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html
 [3]: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html
