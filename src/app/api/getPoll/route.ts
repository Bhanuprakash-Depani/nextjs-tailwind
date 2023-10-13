import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.strawpoll.com/v3/users/@me/polls', {
    method: 'GET',
    cache: 'no-cache',
    headers: [['X-API-Key', process.env.X_API_KEY ?? '']],
  });
  const data = await response.json();
  return NextResponse.json(data);
}
