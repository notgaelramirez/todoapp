import React, { useState } from 'react'

const Form = (props) => {

  let [input, setInput] = useState('')
  
  const onChange = e =>{
    setInput(e.target.value)
  }

  const onSubmit = e =>{
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input
    })

    setInput('')
  }

  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <input
        className='input'
        value={input}
        placeholder='  Agrega una tarea...'
        type="text"
        name='text'
        onChange={onChange}/>
        <button
        className='input-button'>Agregar</button>
      </form>
    </div>
  )
}

export default Form