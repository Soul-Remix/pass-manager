import { NextApiRequest, NextApiResponse } from "next";
import zxcvbn from "zxcvbn";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const password: string | null = body?.password;
  if (!password) {
    res.status(400).json({ message: "Password can't be empty" });
    return;
  }
  const result = zxcvbn(password);
  res.status(200).json(result);
}
