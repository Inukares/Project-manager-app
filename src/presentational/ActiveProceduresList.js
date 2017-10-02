import React from 'react';
import ListingAddedTasks from '../container/ListingAddedTasks';
import FinishedTasksMessage from './FinishedTasksMessage.js';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep'


const editsvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"/></svg>

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

export default ActiveProceduresList;
