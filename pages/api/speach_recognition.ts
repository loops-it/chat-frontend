import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ message: 'Method Not Allowed' });
//     return;
//   }
// https://chat-backend-self.vercel.app/home/recording-start
// http://localhost:3001/home/recording-start

  try {
    const response = await fetch('http://localhost:3001/home/recording-start', {
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
    console.log(data)
    res.status(200).json({ transcript: data });
  } catch (error) {
    res.status(500).json({ error });
  }
}
