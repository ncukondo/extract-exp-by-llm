import type { VercelRequest, VercelResponse } from "@vercel/node";
import { dummyHandler } from "../../services/make-response.js";

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    res.status(200).json(await dummyHandler(req.body));
  } else {
    res.send(`The method ${req.method} is not supported`);
  }
}
