---
date: 2019-12-06T18:08:22.000Z
tags:
  - aws
  - startup
  - til
format: status
---
TIL that you need to grant permissions to more than _just_ your
`elasticbeanstalk-<region>-<account>` S3 bucket when deploying to Elastic
Beanstalk; [you also need permissions on `elasticbeanstalk-*`][1].

 [1]: https://gist.github.com/magnetikonline/5034bdbb049181a96ac9
