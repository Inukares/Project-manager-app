import React, { Component } from 'react';
import ListingAddedTasks from '../presentational/ListingAddedTasks';
import FinishedTasksMessage from '../presentational/FinishedTasksMessage.js';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep'


const styles = {marginBottom:'-8px'}

const buttonStyle = {margin:'0px 18px 0px 0px'}

const ActiveProceduresList = props => {
    const list = props.library.map((procedure) => {
        const {id, procedureName} = procedure; 
        return(
            <List className="text-left" key={procedureName} style={styles} >
                <ListItem 
                  className="text-center"
                  open={procedure.expanded}
                  primaryText={procedureName} 
                  rightIconButton={(
                        <FloatingActionButton style={buttonStyle} mini={true} onClick={() => props.deleteActiveProcedure(procedure)}>
                            <ContentDeleteSweep />
                        </FloatingActionButton>
                    )}
                  onClick={() => props.onProcedureToggle(procedure)} nestedItems = {[
                    <FinishedTasksMessage 
                    key={id}
                    procedure={procedure}
                    tasks={props.tasks.filter(singletask => singletask.procedureId === id)}
                    />,
                    <ListingAddedTasks 
                        key={procedureName}
                        tasks={props.tasks.filter(singletask => singletask.procedureId === id)}
                        procedure={procedure}
                        onTaskToggle={props.onTaskToggle}
                    />
                ]}/>
            </List>
        )
    })
    return <div>{list}</div>
}

export default ActiveProceduresList