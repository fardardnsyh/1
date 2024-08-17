import React from 'react';

const InputBox = ({type , style , placeholder , value , onChangeFunc , keyPress }) => {
  return (
    <input 
      type={type} 
      className={`${style ? style : ""}`} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChangeFunc} 
      onKeyPress={keyPress}
    />
  )
}

export default InputBox;
