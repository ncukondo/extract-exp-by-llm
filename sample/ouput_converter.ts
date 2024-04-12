import { convertToUrl } from "../services/extract-ids"


const input = `JlvnmcI`

const baseUrl = "https://flexible-form.vercel.app/v/pEtOtu6xRWOEpjY3V5Iy9Q";

const idList = input.split(",").map((id) => id.trim());

console.log(convertToUrl(baseUrl,idList));