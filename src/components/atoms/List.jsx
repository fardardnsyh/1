import React from 'react'
import { Link , useLocation } from 'react-router-dom'

const List = ({elements = [] , ulStyle , liStyle , divStyle}) => {
  const location = useLocation();
  return (
    <div className={`${divStyle ? divStyle : ""}`}>
      <ul className={`${ulStyle ? ulStyle : ""}`}>
        {elements.length > 0 && elements.map((element , index) => (
            <li 
              key={index} 
              className={`${liStyle ? liStyle : ""} ${location.pathname === element.url ? "underline": ""}`}>
                <Link to={element.url}>{element.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List
