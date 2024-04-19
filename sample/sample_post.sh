#!/bin/bash

# JSONファイルのパス
FILE_PATH="./sample/sample_long.json"

# true end point: https://extract-exp-by-llm.vercel.app/api/

# APIエンドポイント
API_ENDPOINT="https://extract-exp-by-llm.vercel.app/api/"

# curlを使用してファイルの内容をPOSTする
curl -o ./sample/output.json -X POST -H "Content-Type: application/json" -d @$FILE_PATH $API_ENDPOINT  > ./sample/output.log  2> ./sample/error.log