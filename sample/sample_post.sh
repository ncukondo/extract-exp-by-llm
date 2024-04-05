#!/bin/bash

# JSONファイルのパス
FILE_PATH="./sample/sample.json"

# APIエンドポイント
API_ENDPOINT="https://extract-exp-by-llm.vercel.app/api/"

# curlを使用してファイルの内容をPOSTする
curl -X POST -H "Content-Type: application/json" -d @$FILE_PATH $API_ENDPOINT