import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ message: req.method });
//     return;
//   }

  try {
    const response = await fetch('https://chat-backend-self.vercel.app/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data
    // res.status(200).json({ transcript: data.transcript });
  } catch (error) {
    res.status(500).json({ error });
  }
}
