import { convertToUrl,convertToText } from "../../services/extract-ids"
import { parseOutput } from "../../lib/types";

const baseUrl = "https://flexible-form.vercel.app/v/pEtOtu6xRWOEpjY3V5Iy9Q";


//パイプで渡された標準入力を受け取る
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const response = parseOutput(JSON.parse(input));

if(!response.success) {
  console.log(response.error.message);
  process.exit(1);
}

const { data } = response;

if(data.status === "failure") {
  console.log(data.message);
  process.exit(1);
}

console.log(data.status);
for(const item of data.data) {
  console.log(`\n\n\n${item.id}`);
  if(item.status === "failure") {
    console.log(item.message);
    continue;
  }
  const idList = item.codes;

  console.log(convertToUrl(baseUrl,idList));
  
  const text = convertToText(idList);
  
  console.log(text);
}


