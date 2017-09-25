import React from 'react';
import ListingTasks from '../container/ListingTasks';


const ProceduresList = props => {
    const list = props.library.map(procedure => {
        const { id, procedureName, tasks } = procedure;
        return(
            <div key={id}>
                <h4>{procedureName} </h4>
                <div><ListingTasks tasks={tasks} onTaskToggle={props.onTaskToggle}/></div>
            </div>
        )
    })
    return <div>{list}</div>
}

export default ProceduresList;