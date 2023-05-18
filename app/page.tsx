'use client'

import React, { useEffect, useState } from 'react'
import { Header } from '@vam/components/Header'
import { SearchBox } from '@vam/components/SearchBox'
import { DictionaryDetails } from '@vam/components/DictionaryDetails'
import { useFontFamilyContext } from './context/fontFamily/context'
import { useFetch } from './data/useFetch'
import { useThemeContext } from './context/ThemeContext/ThemeContext'

export default function Home() {
  const [searchedWord, setSearchedWord] = useState('')
  const { data, isLoading, isError } = useFetch(searchedWord)
  const { state } = useFontFamilyContext()
  const { fontFamily } = state
  const { state: themeState, dispatch: themeDispatch } = useThemeContext()
  const submitHandler = (val: string) => {
    setSearchedWord(val)
  }

  const fontFam = () => {
    switch (fontFamily) {
      case 'mono':
        return 'font-mono'
      case 'sans':
        return 'font-sans'
      case 'serif':
        return 'font-serif'
      default:
        return 'font-serif'
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeClasses = ['dark', 'light']
      window.document.documentElement.classList.remove(...themeClasses)
      window.document.documentElement.classList.add(themeState.theme)
    }
  }, [themeState.theme])

  return (
    <main className={`flex flex-col ${fontFam()}`}>
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
