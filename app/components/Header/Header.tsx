'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo-new.svg'
import { useFontFamilyContext } from '@vam/context/fontFamily/context'
import { ActionTypes } from '@vam/context/fontFamily/types'
import { useThemeContext } from '@vam/context/ThemeContext/ThemeContext'
import { ActionType } from '@vam/context/ThemeContext/types'

export const Header = () => {
  const { dispatch } = useFontFamilyContext()
  const { state, dispatch: themeDispatch } = useThemeContext()
  const [buttonText, setButtonText] = useState('')
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.target.value } as ActionTypes)
  }

  useEffect(() => {
    const buttonInitialIcon = state.theme === ActionType.DARK ? '🔆' : '🌙'
    setButtonText(buttonInitialIcon)
  }, [state.theme])

  const themeButtonClickHandler = () => {
    if (state.theme === ActionType.DARK) {
      themeDispatch(ActionType.LIGHT)
      setButtonText('🌙 ')
    } else {
      themeDispatch(ActionType.DARK)
      setButtonText('🔆')
    }
  }

  return (
    <header className="flex py-5 justify-between mb-24">
      <div className="flex">
        <Logo className="dark:stroke-white stroke-slate-800 stroke-2" />
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex border-2 dark:border-purple-400 border-sky-400 p-1 pl-4 pr-4 dark:bg-white bg-slate-800">
          <select
            name="font"
            id="font"
            className="min-w-[170px] text-center  text-md focus:outline-none dark:text-slate-800 text-slate-100 dark:bg-white bg-slate-800 "
            onChange={changeHandler}
          >
            <option value="serif">Serif</option>
            <option value="sans">Sans-serif</option>
            <option value="mono">Monospace</option>
          </select>
        </div>
        <div className="flex">
          <button
            className="text-md min-w-[60px]  border-l-[1px] border-slate-800 dark:border-slate-400 pl-2"
            onClick={themeButtonClickHandler}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  )
}
