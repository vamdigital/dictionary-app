'use client'

import React, { useState } from 'react'
import { Header } from '@vam/components/Header'
import { SearchBox } from '@vam/components/SearchBox'
import { DictionaryDetails } from '@vam/components/DictionaryDetails'
import { useFontFamilyContext } from './context/fontFamily/context'
import { useFetch } from './data/useFetch'

export default function Home() {
  const [searchedWord, setSearchedWord] = useState('')
  const { data, isLoading, isError } = useFetch(searchedWord)
  const { state } = useFontFamilyContext()
  const { fontFamily } = state
  const submitHandler = (val: string) => {
    setSearchedWord(val)
  }

  return (
    <main className={`flex flex-col font-${fontFamily}`}>
      <div className="container">
        <Header />
        <SearchBox submitHandler={submitHandler} />
        {isLoading && <div>isLoading</div>}
        {isError && <div>error</div>}
        {data && data.title && <div>{data.title}</div>}
        {data && data.title == null && (
          <>
            <DictionaryDetails data={data} />
          </>
        )}
      </div>
    </main>
  )
}
