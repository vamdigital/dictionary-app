import { useState } from 'react'
import SearchIcon from '../../../public/icon_search.svg'

interface Props {
  submitHandler: (word: string) => void
}

export const SearchBox = ({ submitHandler }: Props) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
  }

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const search = target.search.value
    submitHandler(search)
    setValue('')
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <fieldset className="flex relative w-full">
        <input
          type="text"
          id="search"
          placeholder="Enter text"
          name="search"
          value={value}
          onChange={onChangeHandler}
          className="flex h-11 rounded-md border-2 border-blue-500 focus-visible:border-purple-600 w-full p-3 dark:text-slate-800"
          autoFocus
        />
        <SearchIcon className="absolute right-3 top-3" />
      </fieldset>
    </form>
  )
}
