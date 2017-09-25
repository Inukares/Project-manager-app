import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AddProcedureButton from './../container/AddProcedureButton.js'

const style = { 
  textAlign:'center',
  fontWeight:'600'
}

export default class ExpandingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      style
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };


  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Click to open your project"
          style={this.state.style} // not sure if should be passed as props or just pass const object
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Data about the project" expandable={true} />
        <CardText expandable={true}>
          <p>Where:</p>
          <Divider/>
          <p>When it starts:</p>
          <Divider/>
          <p>When it ends:</p>
          <Divider/>
          <AddProcedureButton
            library={this.props.library}
            tasks={this.props.tasks}
            onTaskToggle={this.props.onTaskToggle}
            onProcedureToggle={this.props.onProcedureToggle}
          />
        </CardText>
      </Card>
    );
  }
}

