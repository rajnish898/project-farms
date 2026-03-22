

import React from 'react'

function Button({text , variant}) {
    const styles = {
        primary : "bg-blue-600 text-white hover:bg-blue-900 shadow-md",
        secondary : "border border-blue-600 text-blue-600 hover:bg-blue-50"

    }
  return (
   <button className= {` rounded-2xl px-6 py-3 font-semibold  transition ${styles[variant]}`}>{text}</button>
  )
}

export default Button




