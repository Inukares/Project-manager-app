import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './presentational/TopBar.js';
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
    isVisible:false, // After clicking a button possible procedures will be rendered
    expanded:false,
    completedTasks:0,
    id:1,
  }, 
  {
    procedureName:'Building the roof',
    isVisible:false,
    expanded:false,
    completedTasks:0,
    id:2,
  } 
]

 const tasks = [  
  {
    taskName:'dig at least 1m deep', isCompleted:false, procedureId:1
  },
  {
    taskName:'At least 50m wide digging', isCompleted:false, procedureId:1
  },
  {
    taskName:'Buy megazords', isCompleted:false, procedureId:1
  },
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

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects,
      library,
      tasks,
    }
  }

onTaskToggle = (task, procedure) => {
  if(task.isCompleted === false){
   procedure.completedTasks += 1;
   this.setState({
     procedure
    }) 
  }

  if(task.isCompleted === true){
    procedure.completedTasks -= 1;
    this.setState({
      procedure
    })
  }

  task.isCompleted = !task.isCompleted; // required in order to setState
  this.setState({
    task
  })
}

onProcedureToggle = (procedure) => {
  procedure.expanded = !procedure.expanded;
  this.setState({
    procedure
  })
}


  render() {
    const {projects, library, expanded, tasks} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <TopBar/>
          <ExpandingCard projects={projects} />
          <Procedures
            library={library}
            tasks={this.state.tasks}
            onTaskToggle={this.onTaskToggle}
            onProcedureToggle={this.onProcedureToggle}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;


// Do dodania: po kliknieciu guzika (ADD PROCEDURE) pojawiają się (disabled -- to chyba dobry pomysł na później) 
//procedury z biblioteki. Dodać do tych where itd. zmienianie danych na podstawie arrayki.
// pamietaj zeby umiescic to wszystko wewnatrz karty z otworzonym projektem