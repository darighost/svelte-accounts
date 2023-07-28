import { json } from '@sveltejs/kit'
import { sensitiveHeaders } from 'http2'

const balances = {
  'you': 100,
  'joe': 200
}

// /api/newsletter GET

export async function GET(event) {
  return json(balances)
}

// /api/newsletter POST

export async function POST(event) {
  const data = await event.request.json()

  balances.you = data.you;
  balances.joe = data.joe;

  // it's common to return JSON, so SvelteKit has a helper
  return json(balances)
}
