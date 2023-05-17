import { Data } from './types'

export async function fetcher<JSON = Data[]>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
