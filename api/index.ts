import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handler } from "../services/make-response";

export default function (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    res.status(200).json(handler(req.body));
  } else {
    res.send(`The method ${req.method} is not supported`);
  }
}