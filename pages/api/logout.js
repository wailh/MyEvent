import { API_URL } from '@/config/index';
import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        expires: new Date(0),
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        path: '/',
      })
    );
    res.status(200).json({ message: 'Success' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
