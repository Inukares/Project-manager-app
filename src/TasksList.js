import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 12,
    },
  };

export default class TasksList extends React.Component {
    constructor(props){
        super(props)
    }

  state = {
    open: false,
    checked: false
  };

  handleNestedListToggle = (item) => { // will be deleted
    this.setState({
      open: item.state.open,
    });
  };

  updateCheck = () => {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    
      return (
        <div>
            {
            this.props.library.map((task, index) => { // under this line goes mapping through procedures
                 task.tasks.forEach((element, id) => { // under this line goes looping through each item
                    return(
                    <div>
                        <Checkbox 
                          label={element.taskName}
                          style={styles.checkbox}
                          checked={element.isCompleted}
                          key={element.id}
                        />
                    </div>
                )
                });
            })
            }
        </div>
    );
  }
} 