import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const info = [];

function Input() {

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeRoll(event) {
    setRoll(event.target.value);
  }

  const submitt = ()=>{
    info.push({name : name , roll : roll});
  }

  return (
  <div>
      <form>
          <input 
            type="text"
            placeholder="Name"
            onChange={handleChangeName}
          />
          <input 
            type="text"
            placeholder="Roll Number"
            onChange={handleChangeRoll}
          />
      </form>
      <Link to='/Certi'>
      <button type="submit" onClick={submitt}>Submit</button>
      </Link>
  </div>
  )
}

export default Input;

export {info};


