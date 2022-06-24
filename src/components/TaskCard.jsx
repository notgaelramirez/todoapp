import React from 'react'

const TaskCard = ({task, deleteTask}) => {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <section className='cards'>
      <article className='task-card'>
        <h3 className='text'><p>{task.text}</p></h3>
        <aside className='aside'>
          <button className='check-btn' onClick={()=> deleteTask(task.id)}>
            <span className="material-symbols-outlined">check_circle</span>
          </button>
          <button className='delete-btn' onClick={()=> deleteTask(task.id)}>
          <span className="material-symbols-outlined">delete</span>
          </button>
        </aside>
      </article>
    </section>
    </>
  )
}

export default TaskCard