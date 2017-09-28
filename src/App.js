import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './presentational/TopBar.js';
import ExpandingCard from './presentational/ExpandingCard.js'

const projects = [
  {
    projectName: '',
 //   projectId:0,
    where: '',
    startDate: {},
    startDateShown:'',
    endDate: {},
    endDateShown:'',
  },
]

const library = [
  {
    procedureName:'Build Foundations',
    isVisible:false,
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

    task.isCompleted = !task.isCompleted;
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

  handleNameInput = (e, project) => {
    e.preventDefault();
    const projectName = e.target.projectName.value;
    project.projectName = projectName;
    this.setState({
      project
    })
  }

  handleWhereInput = (e, project) => {
    e.preventDefault();
    const where = e.target.where.value;
    project.where = where;
    this.setState({
      where
    })
  }

  handleStartDate =  (e, date, project) => {
    project.startDate = date;
    project.startDateShown = date.toLocaleDateString();
    this.setState({
      project
    })
  }

  handleEndDate =  (e, date, project) => {
     project.endDate = date;
     project.startDateShown = date.toLocaleDateString();
     this.setState({
       project
     })
   }

   // if activeprocedures includes procedure of certain name

  render() {
   // console.log(this.state)
    const {library, tasks} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {
            this.state.projects.map((singleproject, index) =>{
              singleproject.projectId = index;
              return (
                <div key={singleproject.projectId}>
                  <TopBar/>
                  <ExpandingCard
                    library={library}
                    tasks={tasks}
                    onTaskToggle={this.onTaskToggle}
                    onProcedureToggle={this.onProcedureToggle}
                    project={singleproject}
                    handleNameInput={this.handleNameInput}
                    handleWhereInput={this.handleWhereInput}
                    handleStartDate={this.handleStartDate}
                    handleEndDate={this.handleEndDate}
                  />
                </div>
              )
            })}
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;



/*    handleAddProcedure = (procedure) => {
     // let copy = JSON.parse(JSON.stringify(procedure));
      let activeProcedures = this.state.projects.activeProcedures;
      let copiedProcedure = {};
    /*  if(activeProcedures === undefined || activeProcedures.length === 0){
        activeProcedures  = JSON.parse(JSON.stringify(procedure));
        console.log(this.state)
      } else {
        activeProcedures = [...activeProcedures, copiedProcedure];
        console.log(activeProcedures)
      } 
      this.setState({
        activeProcedures
      }) 

       HOW TO APPEND TO THIS.STATE.PROJECT.ACTIVEPROCEDURES A PROCEDURE FROM PROCEDURESLIST
    } */ 