import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import AddProcedureButton from './../container/AddProcedureButton.js'
import GetProjectNameInput from './GetProjectNameInput.js'
import GetProjectPlaceInput from './GetProjectPlaceInput.js'
import GetStartDate from './GetStartDate.js'
import GetEndDate from './GetEndDate.js';
import Subheader from 'material-ui/Subheader';

const style = {  // Add here style for this span, it should be big to show what is title of project
  textAlign:'center',
  fontWeight:'600',
}

const h4Style = {
  margin:'-6px 0 0 0'
}

const paddingStyle={paddingLeft:'0px'};

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

  renderInputNameField = (props) => {
    if(this.props.project.projectName.length === 0){
      return(
        <GetProjectNameInput
        project={this.props.project}
        handleNameInput={this.props.handleNameInput}
        />
      )
    } else {
      return (
      <div>
        <Subheader>Name of your project</Subheader>
          <h4 style={h4Style} >{this.props.project.projectName}</h4>
      </div>
    )
    }
  }

  renderInputWhereField = (props) => {
    if(this.props.project.where.length === 0){
      return(
        <GetProjectPlaceInput
          project={this.props.project}
          handleWhereInput={this.props.handleWhereInput}
        />
      )
    } else {
      return (
      <div>
        <Subheader>Where your project takes place:</Subheader>
          <h4 style={h4Style} >{this.props.project.where}</h4>
      </div>
    )
    }
  }

  renderEndDate = () => {
    let isDateSet = this.props.project.startDate;
    let parsedDate = Date.parse(isDateSet);
    if((parsedDate) !== 0 && Number.isFinite(parsedDate)){
      return(
        <GetEndDate
        project={this.props.project}
        handleEndDate={this.props.handleEndDate}
      />
      )
    }
  } 

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Click to open your project"
          style={style}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} style={paddingStyle} >
          <div className="text-center" >
            {this.renderInputNameField([...this.props])}
            {this.renderInputWhereField([...this.props])}
            <GetStartDate
              project={this.props.project}
              handleStartDate={this.props.handleStartDate}
            />
            {this.renderEndDate()}
          </div>
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