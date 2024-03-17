import React, { useContext } from 'react'
import './form.css'
import { ThemeContext } from './themecontext'

export const Form = () => {
    const theme = useContext(ThemeContext)
  return (
    <div>

        <h1 className={`text-${theme}`}>form </h1>
        <input type="text"/>
    </div>
  )
}
