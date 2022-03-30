import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.NEXT_APP_GRAPHCRM_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.unstable_revalidate('/blog')

    return res.json({ revalidated: true })
  } catch ({ message }) {
    return res.status(500).json({
      error: message,
      status: 500,
    })
  }
}
