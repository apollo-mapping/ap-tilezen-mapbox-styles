#!/bin/bash
./generate-sprites.sh
s3Bucket=$1
awsProfile=$2

aws s3 sync sprites s3://${s3Bucket}/sprites --acl public-read --cache-control no-cache --profile ${awsProfile}

# upload built js file for demo that uses plain old js <script> tags
npm run build-webpack
aws s3 sync lib/@apollomapping s3://osm-vector-tiles-apollomapping/style --acl public-read --cache-control no-cache --profile ${awsProfile}
