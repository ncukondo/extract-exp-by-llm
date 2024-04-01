import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    // POSTリクエストを処理します
    const name = req.body;
    res.status(200).json({Hello: name});
  } else {
    // その他のHTTPメソッドを処理します
    const { name = "World" } = req.query;
    res.send(`Get:Hello ${name}!`);
  }
}