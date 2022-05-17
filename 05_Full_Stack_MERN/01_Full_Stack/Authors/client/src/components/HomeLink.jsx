import React from 'react'
import { Link } from 'react-router-dom'

const HomeLink = () => {
  return (
    <fieldset>
        <legend>Home Link Component</legend>
        <Link to="/">Home</Link>
    </fieldset>
  )
}

export default HomeLink