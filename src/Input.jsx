import React from 'react'
import { Link } from 'react-router-dom'

export default function Input() {
  return (
  <div>
      <form>
          <label>Name</label>
          <input type="text" id="name" />
          <label>Roll Number</label>
          <input type="text" id="roll" />
      </form>
      <Link to='/Certi'>
      <button type="submit">Submit</button>
      </Link>
  </div>
  )
}
