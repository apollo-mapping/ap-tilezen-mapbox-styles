#!/bin/bash
s3Bucket=$1
awsProfile=$2

aws s3 sync sprites s3://${s3Bucket}/sprites --acl public-read --cache-control no-cache --profile ${awsProfile}