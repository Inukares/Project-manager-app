import React from 'react'
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checkBox: {
      marginLeft:'23px',
    },
    input: {
      color:'rgba(0,0,0,1)',
      fontWeight:'400'
    }
}

const ListingAddedTasks = (props) => {
  const list = props.tasks.map(task => { 
    const taskName = task.taskName;
    return (
      <Checkbox style={styles.checkBox} labelStyle={styles.input} checked={task.isCompleted} key={taskName} onClick={() => props.onTaskToggle(task, props.procedure)} label={taskName}/>
  )
  })
  return <div>{list}</div> 
}

export default ListingAddedTasks 
