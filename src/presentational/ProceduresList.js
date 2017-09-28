import React from 'react';
import ListingTasks from '../container/ListingTasks';
import FinishedTasksMessage from './FinishedTasksMessage.js';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {marginBottom:'-8px'}

const ProceduresList = props => {
    const list = props.library.map(procedure => {
        const {id, procedureName} = procedure; 
        return(
            <List className="text-left" key={procedureName} style={styles} >
                <ListItem 
                  className="text-center"
                  open={procedure.expanded}
                  primaryText={procedureName}
                  rightIconButton={(
                      <FloatingActionButton mini={true} onClick={() => props.handleActiveProcedures(procedure)}>
                        <ContentAdd />
                      </FloatingActionButton>
                    )}
                  onClick={() => props.onProcedureToggle(procedure)} nestedItems = {[
                    <ListingTasks 
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

export default ProceduresList;
