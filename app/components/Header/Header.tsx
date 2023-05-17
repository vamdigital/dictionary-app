'use client'
import React from 'react'
import Logo from '../../../public/logo-new.svg'
import { useFontFamilyContext } from '@vam/context/fontFamily/context'
import { ActionTypes } from '@vam/context/fontFamily/types'

export const Header = () => {
  const { dispatch } = useFontFamilyContext()

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: e.target.value } as ActionTypes)
  }

  return (
    <header className="flex py-5 justify-between mb-24">
      <div className="flex">
        <Logo />
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex border-2 border-transparent border-r-slate-200 p-2 pr-4">
          <select
            name="font"
            id="font"
            className="text-center px-2 text-md focus:outline-none"
            onChange={changeHandler}
          >
            <option value="serif">Serif</option>
            <option value="sans">Sans-serif</option>
            <option value="mono">Monospace</option>
          </select>
        </div>
        <div className="flex">
          <button className="text-md">Dark</button>
        </div>
      </div>
    </header>
  )
}
