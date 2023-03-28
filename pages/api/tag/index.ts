import { NextApiResponse, NextApiRequest } from 'next'
import { db } from '@/database'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json(db)
}
