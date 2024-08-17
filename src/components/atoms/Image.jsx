import React from 'react';

const Image = ({style , src , href , onClickFunc}) => {
  return (
      <img className={`${style ? style : ""}`} src={src} href={href} onClick={onClickFunc} />
  )
}

export default Image;
