import useSWR from 'swr'
import { fetcher } from './fetcher'
export const useFetch = (word: string): any => {
  const { data, isLoading, error } = useSWR(
    word ? `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` : null,
    fetcher,
    {
      shouldRetryOnError: false
    }
  )
  return {
    data,
    isLoading,
    error
  }
}

// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
