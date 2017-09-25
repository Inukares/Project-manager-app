import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './presentational/TopBar.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import ExpandingCard from './presentational/ExpandingCard.js'
import Procedures from './container/Procedures.js'

const projects = [
  {
    projectName: 'Building the skyscraper',
    where: 'Warsaw',
    startDate: '30/08/2017',
    endDate: '30/12/2017'
  },
  {
    projectName: 'Making a nice elevation',
    where: 'London',
    startDate: '20/06/2018',
    endDate: '20/10/2018'
  }
]

const library = [
  {
    procedureName:'Build Foundations',
    id:1,
    tasks:[  
      {
        taskName:'dig at least 1m deep', isCompleted:false, procedureId:1
      },
      {
        taskName:'At least 50m wide digging', isCompleted:false, procedureId:1
      },
      {
        taskName:'Buy megazords', isCompleted:false, procedureId:1
      }
    ]
  }, 
  {
    procedureName:'Building the roof',
    id:2,
    tasks:[
      {
        taskName:'Constructed according to the project', isCompleted:false, procedureId:2
      },
      {
        taskName:'Protect wood from humidity', isCompleted:false, procedureId:2
      },
      {
        taskName:'Roof build with the correct angle', isCompleted:false, procedureId:2
      }
    ]
  } 
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects,
      library,
      expanded:false

    }
  }

  onTaskToggle = (task) => {
    const findProcedure = library => library.filter(procedure => procedure.id === task.procedureId);
    
    const findTask = tasks => tasks.filter(singleTask => singleTask.taskName === task.taskName);
    const toggledTask = findTask(findProcedure(this.state.library)[0].tasks);
    //console.log(toggledTask);
    const procedureIndex =  this.state.library.indexOf(findProcedure(this.state.library)[0]);
    const toggledTaskIndex = this.state.library[procedureIndex].tasks.indexOf(toggledTask[0]);
    const insideProcedure = this.state.library[procedureIndex];
    const insideTask = this.state.library[procedureIndex].tasks.indexOf(toggledTask[0]);
   // console.log(toggledTaskIndex);
    this.setState({
      ...library
    })
}

  render() {
    const {projects, library, expanded} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <TopBar/>
          <ExpandingCard projects={projects} />
          <Procedures library={library} onTaskToggle={this.onTaskToggle}/>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
