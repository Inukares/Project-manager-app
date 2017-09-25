import React from 'react';
import Subheader from 'material-ui/Subheader'

const styles = {
    lineHeight:'32px',
    marginTop:'-5px'
}

const FinishedTasksMessage = props => {
    return(
        <Subheader style={styles}>
            Tasks completed: {props.procedure.completedTasks}/{props.tasks.length}
        </Subheader>

    )
}


export default FinishedTasksMessage;


/*
const FinishedTasksMessage = props => {
    return(
        <Subheader style={styles}>
            Tasks completed: {props.procedure.completedTasks}/{props.tasks.length}
        </Subheader>

    )
} */