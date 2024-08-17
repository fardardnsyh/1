import React from 'react'

const Text = ({text , style}) => {
  return (
    <div>
      <p className={`${style ? style : ""}`}>{text}</p>
    </div>
  )
}

export default Text
