import { NextResponse } from 'next/server';

const middleware = (req) => {
  const verify = req.cookies.get('token');
  const { pathname, origin } = req.nextUrl;

  if (
    !verify &&
    (pathname.includes('/events/') || pathname.includes(`/edit`))
  ) {
    return NextResponse.redirect(`${origin}/account/login`);
  }
};

export default middleware;
