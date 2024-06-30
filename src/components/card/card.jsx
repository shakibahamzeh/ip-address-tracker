import React from 'react'

const Card = ({title,content}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h2>{content}</h2>
    </div>
  )
}

export default Card
