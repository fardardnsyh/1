import React from 'react';

const IconButton = ({icon , style , onClickFunc}) => {
  return (
    <button type='button' className={`${style ? style : ""}`} onClick={onClickFunc}>
      {icon}
    </button>
  )
}

export default IconButton;
