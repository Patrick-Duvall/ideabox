import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({title, description, id, deleteIdea}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteIdea: PropTypes.func.isRequired
}