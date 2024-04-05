import * as fse from 'fs-extra';
import * as fs from "node:fs/promises";
import { ensureWithoutBom,parseCSV,toCsv } from './csv.js';

const loadFile = async (path: string) => {
  return (await fs.readFile(path)).toString();
}

const loadAsJson = async <T>(path: string) => {
  return JSON.parse(await loadFile(path)) as T;
}

const loadCsv = async (path: string) => {
  const text = await loadFile(path);
  const result = parseCSV(ensureWithoutBom(text));
  if(result.ok){
    return result.value as string[][];
  }
  throw new Error("Failed to parse CSV");
}


const loadCsvAsDictList = async (path: string) => {
  const table = await loadCsv(path);
  const [header, ...rows] = table;
  return rows.map(row => {
    const dict: { [key: string]: string } = {};
    row.forEach((cell, i) => {
      dict[header[i]] = cell;
    });
    return dict;
  });
}

export {loadAsJson,loadFile,loadCsv,loadCsvAsDictList}