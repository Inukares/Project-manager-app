import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import AddProcedureButton from './../container/AddProcedureButton.js'
import GetProjectNameInput from './GetProjectNameInput.js'
import GetProjectPlaceInput from './GetProjectPlaceInput.js'
import GetStartDate from './GetStartDate.js'
import GetEndDate from './GetEndDate.js';
import Subheader from 'material-ui/Subheader';
import ActiveProceduresList from './ActiveProceduresList.js'
import dates from '../customstylesheets/dates.css';

const style = {
  textAlign:'center',
  fontWeight:'600',
  marginLeft:'48px' // margin needed to delete pushing of right button
}

const titleStyle = {marginLeft:'48px'};

const h4Style = {
  margin:'-6px 0 0 0',
}

const paddingStyle={marginLeft:'8px', paddingLeft:'0px',paddingRight:'0px', margin:'0 auto', width:'100%'};

const activeProcedures = [];

export default class ExpandingCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      style,
      activeProcedures
    };
  }

  componentWillMount(){
    this.props.setProcedureId();
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

  handleActiveProcedures = (procedure) => {
    let activeProcedures = this.state.activeProcedures;
    let copiedProcedure = JSON.parse(JSON.stringify(procedure));
    let flag = true;
    activeProcedures.map(singleprocedure => {
      if(JSON.stringify(singleprocedure) === JSON.stringify(procedure))
      {
       return flag = false;
      }});
    if(flag)
    {
       activeProcedures.push(copiedProcedure);
    }
    this.setState({
      activeProcedures
    })
  }

  deleteActiveProcedure = (procedure) => {
    let activeProcedures = this.state.activeProcedures;
    let deleteId = procedure.id;
    let newActiveProcedures = JSON.parse(JSON.stringify(activeProcedures.filter(singleprocedure => {
      return singleprocedure.id !== deleteId;
    })))
    this.setState({
      activeProcedures:newActiveProcedures
    })
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
          titleStyle={titleStyle}
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
           <ActiveProceduresList
            library={this.state.activeProcedures}
            tasks={this.props.tasks}
            onTaskToggle={this.props.onTaskToggle}
            onProcedureToggle={this.props.onProcedureToggle}
            deleteActiveProcedure={this.deleteActiveProcedure}
          />
          </div>
          <div id="addProcedureButton">
            <AddProcedureButton
              fullWidth={true}
              library={this.props.library}
              tasks={this.props.tasks}
              onTaskToggle={this.props.onTaskToggle}
              onProcedureToggle={this.props.onProcedureToggle}
              handleActiveProcedures={this.handleActiveProcedures}
            />
           </div>
        </CardText>
      </Card>
    );
  }
}