import { loadAsJson } from "../lib/file-utils.js";
import { chatCompletion, type CompletionResponse, type Message } from "../lib/chat-completion.js";
import { loadFile } from "../lib/file-utils.js";

const makeExtractIdPrompt = async (content: string) => {
  const prompt = await loadFile("templates/extract_id.txt")
  return `${prompt}${content}`
}
const extractIdsApi = async (content: string): Promise<CompletionResponse | undefined> => {
  const text = await makeExtractIdPrompt(content);

  const messages = [
    {
      role: "user",
      content: text,
    },
  ] as const satisfies ReadonlyArray<Message>;
  const res = await chatCompletion(messages,"gpt-4-turbo-preview");
  return res;
}

type FormattedIds ={
  procedures: string[];
  diseases: string[];
  symptoms: string[];
  examinations: string[];
}

const loadFormatTemplate = async () => await loadAsJson<FormattedIds>("templates/ids.json");

const convertToFormattedIds = async (ids: string[]): Promise<FormattedIds> => {
  const formatTemplate = await loadFormatTemplate();
  return {
    procedures: formatTemplate.procedures.filter((id) => ids.includes(id)),
    diseases: formatTemplate.diseases.filter((id) => ids.includes(id)),
    symptoms: formatTemplate.symptoms.filter((id) => ids.includes(id)),
    examinations: formatTemplate.examinations.filter((id) => ids.includes(id)),
  }
}

const convertToUrl = async (baseUrl:string,ids: string[]): Promise<string> => {
  const formattedIds = await convertToFormattedIds(ids);
  const params = Object.entries(formattedIds).flatMap(([key, idList]) => {
    return idList.map((id,i) => [`data.${key}.${i}`,`${id}`]);
  })
  const url = `${baseUrl}?${params.map((param) => param.join("=")).join("&")}`;
  return url;
}

type ExtractIdsSuccessResponse = {
  status: "success";
  codes: string[];
  url: string;
}
type ExtractIdsFailureResponse = {
  status: "failure";
  message: string;
}

const extractIds = async (baseUrl:string, content: string): Promise<ExtractIdsSuccessResponse | ExtractIdsFailureResponse> => {
  const res = await extractIdsApi(content);
  if(res === undefined){
    return {
      status: "failure",
      message: "Failed to get response from AI"
    }
  }
  const text = res.choices[0].message.content;
  const ids = text.split(",").map((id) => id.trim());
  const url = await convertToUrl(baseUrl,ids);
  return {
    status: "success",
    codes: ids,
    url: url,
  }
}

export {extractIds,convertToUrl,convertToFormattedIds}
