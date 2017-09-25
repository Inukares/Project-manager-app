import React from 'react'


const ListingTasks = (props) => {
  const list = props.tasks.map(task => { // under this line goes mapping through procedures
    const taskName = task.taskName;
    return <div key={taskName} onClick={() => props.onTaskToggle(task)}>{taskName}</div>
  })
  return <div>{list}</div> 
}

export default ListingTasks