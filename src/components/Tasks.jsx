import React, { useState } from 'react'
import Form from './Form'
import TaskCard from './TaskCard'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  const addTask = task =>{
    
    if(!task.text || /^\s*$/.test(task.text)){
      return
    }

    const newTasks = [task, ...tasks]

    setTasks(newTasks)
    console.log(tasks)
  }

  const deleteTask =(id)=>{
    const remove = tasks.filter(task => task.id !== id)

    setTasks(remove)
  }



  return (
    <section>
      <article className='to-do'>
        <p className='title'>Pendientes del día</p>
        <Form onSubmit={addTask}/>
      </article>
      <div className="cards">
        <div>{tasks.map((task)=><TaskCard
        task={task}
        deleteTask={deleteTask}
        />)}</div>
      </div>
    </section>
  )
}

export default Tasks