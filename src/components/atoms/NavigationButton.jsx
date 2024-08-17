import React from 'react';

const NavigationButton = ({name , onClickFunc , style , type}) => {
  return (
    <div>
      <button type={type} onClick={onClickFunc} className={`${style ? style : ""}`} >{name}</button>
    </div>
  )
}

export default NavigationButton;
