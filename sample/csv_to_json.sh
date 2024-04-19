#!/bin/bash

# 入力用csvファイル
CSV_FILE="./sample/record_per_week.csv"

# 出力ファイル名
OUTPUT_FILE="output.json"


csvjson --no-inference --blanks "$CSV_FILE" | python3 -c "
import sys, json
# JSON を読み込む
data = json.load(sys.stdin)
# id と text の列名を id と content に変更する
new_data = [{'id': item['week_record_id'], 'content': item['text']} for item in data if 'week_record_id' in item and 'text' in item]

output = {
  'key': 'ncukondo@gmail.com',
  'data': new_data[-100:] # 末尾の100件だけを取得する
}
# 変更した JSON を出力する
with open('$OUTPUT_FILE', 'w', encoding='utf-8') as f:
  json.dump(output, f, ensure_ascii=False, indent=2)
"