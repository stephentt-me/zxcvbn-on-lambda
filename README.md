# ZXCVBN On Lambda
<!-- [![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url] -->

Bring an awesome [zxcvbn](https://github.com/dropbox/zxcvbn) password strength estimator to the cloud (AWS Lamda) with [serverless](https://github.com/serverless/serverless)

<!-- ![]() -->

## Installation

First, you will need [serverless](https://github.com/serverless/serverless) framework.

Clone this repo and re-deploy

```bash
git clone https://github.com/stephentt-me/zxcvbn-on-lambda.git
cd zxcvbn-on-lambda
serverless deploy
```
## Usage example

```bash
curl -H 'Content-Type: application/json' -d '{"password":"xyz"}' https://YOUR-LAMDA.amazonaws.com/PATH
```