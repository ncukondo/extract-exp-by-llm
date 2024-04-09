import { chatCompletion, type CompletionResponse, type Message } from "../lib/chat-completion.js";
import { promptTemplate } from "../templates/extract_id.js";
import { idsTemplate } from "../templates/ids.js";
import type { FailureResponse, SuccessResponse } from "../lib/types.js";

const makeExtractIdPrompt = (content: string) => {
  const prompt = promptTemplate;
  return `${prompt}${content}`
}
const extractIdsApi = async (content: string): Promise<CompletionResponse | undefined> => {
  const text = makeExtractIdPrompt(content);

  const messages = [
    {
      role: "user",
      content: text,
    },
  ] as const satisfies ReadonlyArray<Message>;
  const res = await chatCompletion(messages,"gpt-4-turbo-preview",{temperature:0.1});
  return res;
}

type FormattedIds ={
  procedures: string[];
  diseases: string[];
  symptoms: string[];
  examinations: string[];
}


const convertToFormattedIds = (ids: string[]): FormattedIds => {
  const formatTemplate = idsTemplate;
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

type ExtractIdsResponse = Omit<SuccessResponse,"id"> | Omit<FailureResponse,"id">;

const extractIds = async (baseUrl:string, content: string): Promise<ExtractIdsResponse> => {
  const res = await extractIdsApi(content);
  if(res === undefined){
    return {
      status: "failure",
      message: "Failed to get response from AI"
    }
  }
  const text = res.choices[0].message.content;
  const ids = text.split(",").map((id) => id.trim());
  const tokens = {total: res.usage.total_tokens, prompt: res.usage.prompt_tokens, completion: res.usage.completion_tokens};
  const url = await convertToUrl(baseUrl,ids);
  return {
    status: "success",
    codes: ids,
    url: url,
    tokens
  }
}

export {extractIds,convertToUrl,convertToFormattedIds}
