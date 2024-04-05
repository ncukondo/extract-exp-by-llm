#!/bin/bash

# JSONファイルのパス
FILE_PATH="./sample/sample.json"

# APIエンドポイント
API_ENDPOINT="http://localhost:3000/api/dummy"

# curlを使用してファイルの内容をPOSTする
curl -X POST -H "Content-Type: application/json" -d @$FILE_PATH $API_ENDPOINT