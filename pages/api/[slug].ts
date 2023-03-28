import { NextApiRequest, NextApiResponse } from 'next'
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
type ResponseError = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>) {
  const { query } = req
  const { slug } = query
  const jsonDirectory = path.join(process.cwd(), "database.json");
  const fileContents = await fs.readFile(jsonDirectory, "utf8");
  const db = JSON.parse(fileContents)
  const data = db.find((p: any) => p.slug === slug)
  return data
    ? res.status(200).json(data)
    : res.status(404).json({ message: `User with id: ${slug} not found.` })
}

