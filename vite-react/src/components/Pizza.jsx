import React from 'react'

function Pizza(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.ingrediant}</p>
        <span>{props.price}</span>
    </div>
  )
}

export default Pizza;