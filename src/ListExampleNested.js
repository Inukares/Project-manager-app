import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import TasksList from './TasksList.js'

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 12,
    },
  };

export default class ListExampleNested extends React.Component {
    constructor(props){
        super(props)
    }

  state = {
    open: false,
    checked: false
  };

  handleNestedListToggle = (item) => {
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
          <br/>
          <List>
            <ListItem
             key={1}
             primaryText="Procedures"
             leftIcon={<ContentSend />}
             initiallyOpen={true}
             primaryTogglesNestedList={true}
             nestedItems={[
                <div>
                  <ListItem
                    open={this.state.open}
                    onNestedListToggle={this.handleNestedListToggle}
                  >
                  {
                    <TasksList library={this.props.library} />
                  }
                  </ListItem>
                </div>
              ]}
            />
          </List>
      </div>
    );
  }
} 




/*                   {
                   this.props.library.map((task, index) => { // under this line goes mapping through procedures
                          task.tasks.forEach((element, id) => { // under this line goes looping through each item
                              return(
                            <TasksList library={this.props.library} />
                          )
                          });
                      })   */

// SPROBUJ Z FOR EACH


/* this.props.library.map(task => {
    return <p key={task.id}>{task.procedureName} </p> */

// jaki icon do wysuwania procedur? ogarnij to.
// nested items jak wskazuje nazwa sluzy do wprowadzenia wiekszych zaglebien
// zaglebiony item to moze byc cokolwiek ! wiec zrobie z tego ten do klikania czy jest done czy nie


/*import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 12,
    },
  };

export default class ListExampleNested extends React.Component {
    constructor(props){
        super(props)
    }

  state = {
    open: false,
    checked: false
  };

  handleNestedListToggle = (item) => {
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
      //console.log(this.props.library);
      let a = 1;
      return (
        <div>
          <br/>
          <List>
            <ListItem
             key={1}
             primaryText="Procedures"
             leftIcon={<ContentSend />}
             initiallyOpen={true}
             primaryTogglesNestedList={true}
             nestedItems={[
                <div>
                  <ListItem
                    key={1}
                    open={this.state.open}
                    onNestedListToggle={this.handleNestedListToggle}
                  >
                    <Checkbox
                      label="Simple"
                      style={styles.checkbox}
                      key={1}
                    />
                  </ListItem>
                  <ListItem
                    key={2}
                    open={this.state.open}
                    onNestedListToggle={this.handleNestedListToggle}
                  >
                    <div style={styles.block}>
                        <Checkbox
                          key={2}
                          label="Simple with controlled value"
                          checked={this.state.checked}
                          onCheck={this.updateCheck}
                          style={styles.checkbox}
                        />
                    </div>
                  </ListItem>
                </div>
              ]}
            />
          </List>
      </div>
    );
  }
} */