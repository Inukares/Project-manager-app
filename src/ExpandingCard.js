import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const style = {  // Add here style for this span, it should be big to show what is title of project
  textAlign:'center'
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

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    console.log(this.props.projects[0].projectName) // gets the project name
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Nazwa Projektu"
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
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

