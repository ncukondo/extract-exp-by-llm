#!/bin/bash

# JSONファイルのパス
FILE_PATH="./sample/sample.json"

# true end point: https://extract-exp-by-llm.vercel.app/api/

# APIエンドポイント
API_ENDPOINT="http://localhost:3000/api/dummy"

# curlを使用してファイルの内容をPOSTする
curl -o ./sample/output.json -X POST -H "Content-Type: application/json" -d @$FILE_PATH $API_ENDPOINT  > ./sample/output.log  2> ./sample/error.log