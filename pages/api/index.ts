import { NextApiResponse, NextApiRequest } from 'next'
import path from "path";
import { promises as fs } from "fs";

type Data = {
  id: string;
  date: string;
  slug: string;
  title: string;
  content: string;
  tag: string;
}

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) {
     const { query } = req
     const { page } = query
     const Page: any = page
     const Size: any = "1"
     const Start = (Page -1) * Size
     const End = Start + 1
     const jsonDirectory = path.join(process.cwd(), "database.json");
     const fileContents = await fs.readFile(jsonDirectory, "utf8");
     const db = JSON.parse(fileContents)
     const data = db.slice(Start, End)
  return res.status(200).json(data)
}
