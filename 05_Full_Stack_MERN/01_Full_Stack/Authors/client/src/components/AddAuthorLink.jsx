import React from 'react'
import { Link } from 'react-router-dom'

const AddAuthorLink = () => {
  return (
    <fieldset>
      <legend>Add Author Link Component</legend>
      <Link to="/new">Add an author</Link>
    </fieldset>
  )
}

export default AddAuthorLink