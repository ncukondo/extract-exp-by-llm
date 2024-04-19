#!/bin/bash

# JSONファイルのパス
FILE_PATH="./test/data/sample.json"

# 日付のフォーマット（例：2023_04_19_151200）
TIMESTAMP=$(date "+%Y_%m_%d_%H%M_%S")
OUTPUT_DIR="./test/log"
STD_LOG="$OUTPUT_DIR/$TIMESTAMP.log"
ERROR_LOG="$OUTPUT_DIR/$TIMESTAMP_error.log"
JSON_LOG="$OUTPUT_DIR/$TIMESTAMP.json"
TEXT_LOG="$OUTPUT_DIR/$TIMESTAMP.md"
TEMP_FILE="$OUTPUT_DIR/temp.json"

echo $JSON_LOG
echo $TEXT_LOG

# end point lodal: http://localhost:3000/api
# dummy end point local: http://localhost:3000/api/dummy
# dummy end point: https://extract-exp-by-llm.vercel.app/api/dummy
# true end point: https://extract-exp-by-llm.vercel.app/api/

# APIエンドポイント
API_ENDPOINT="http://localhost:3000/api"

# curlを使用してファイルの内容をPOSTする
curl -o $TEMP_FILE -X POST -H "Content-Type: application/json" -d @$FILE_PATH $API_ENDPOINT  > $STD_LOG  2> $ERROR_LOG

# jqを使用して出力ファイルを整形する
jq '.' $TEMP_FILE > $JSON_LOG

cat $JSON_LOG | bun run ./test/tools/output_converter.ts > $TEXT_LOG

rm $TEMP_FILE