import * as fs from 'fs-extra';
import { ensureWithoutBom,parseCSV,toCsv } from './csv';

const loadFile = (path: string) => {
  return fs.readFileSync(path).toString();
}

const loadAsJson = <T>(path: string) => {
  return JSON.parse(loadFile(path)) as T;
}

const loadCsv = (path: string) => {
  const text = loadFile(path);
  const result = parseCSV(ensureWithoutBom(text));
  if(result.ok){
    return result.value as string[][];
  }
  throw new Error("Failed to parse CSV");
}


const loadCsvAsDictList = (path: string) => {
  const table = loadCsv(path);
  const [header, ...rows] = table;
  return rows.map(row => {
    const dict: { [key: string]: string } = {};
    row.forEach((cell, i) => {
      dict[header[i]] = cell;
    });
    return dict;
  });
}

const saveFile = (text:string,path:string) => {
  const dir = path.split("/").slice(0,-1).join("/");
  fs.ensureDirSync(dir);
  fs.writeFileSync(path,text);
}

const saveJson = <T>(data: T, path: string) => {
  saveFile(JSON.stringify(data, null, 2), path);
}


export {loadAsJson,loadFile,loadCsv,loadCsvAsDictList,saveFile,saveJson}