import { type Input,type Output,parseInput,outputSchema } from "../lib/types";
import { extractIds } from "../services/extract-ids";

const baseUrl = "https://flexible-form.vercel.app/v/pEtOtu6xRWOEpjY3V5Iy9Q";

const handler = async (input: unknown): Promise<Output> => {
  const parseResult = parseInput(input);
  if(!parseResult.success){
    return {
      status: "failure",
      message: `Invalid input structure : ${parseResult.error}`
    }
  }
  const {key, data} = parseResult.data;
  const responses = await Promise.all(data.map(async ({id,content}) => {
    const res = await extractIds(baseUrl,content);
    if(res.status === "success") {
      const url = `${res.url}&id=${id}`;
      return {id, ...res, url};
    }
    return {id,...res};
  }));
  return {
    status: "success",
    key,
    data: responses
  }
}

const dummyHandler = async (input: unknown): Promise<Output> => {
  const parseResult = parseInput(input);
  if(!parseResult.success){
    return {
      status: "failure",
      message: `Invalid input structure : ${parseResult.error}`
    }
  }
  const {key, data} = parseResult.data;
  const responses = await Promise.all(data.map(async ({id,content}) => {
    return {
      id,
      status: "success" as const,
      codes: ["dummy"],
      url: `https://dummy.com?id=${id}`,
    };
  }
  ));
  return {
    status: "success",
    key,
    data: responses
  }
}

export {handler,dummyHandler}