import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './presentational/TopBar.js';
import ExpandingCard from './container/ExpandingCard.js'

const projects = [
  {
    projectName: '',
    where: '',
    startDate: {},
    endDate: {},
  },
]

const library = [
  {
    procedureName:'Build Foundations',
    isVisible:false,
    expanded:false,
    completedTasks:0,
  }, 
  {
    procedureName:'Create your own aquapark',
    isVisible:false,
    expanded:false,
    completedTasks:0,
  },
]

 const tasks = [  
  {
    taskName:'Dig at least 1m deep', isCompleted:false,
  },
  {
    taskName:'At least 50m wide digging', isCompleted:false, 
  },
  {
    taskName:'Buy megazords to do the job for you', isCompleted:false,
  },
  {
    taskName:'Construct according to the project', isCompleted:false,
  },
  {
    taskName:'Gather a lot of people', isCompleted:false,
  },
  {
    taskName:'Jump to the water', isCompleted:false,
  },
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

  setProcedureId = () => {
        const tasks = this.state.tasks;
        const library = this.state.library;
        library.map(singleprocedure => {
          if(singleprocedure.hasOwnProperty('id') === false){
            return   singleprocedure.id =  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
          }
        })
        for(let i = 0; i<3;i++){
          if(tasks[i].hasOwnProperty('procedureId') === false){
            tasks[i].procedureId = library[0].id;
          }
        }
        for(let i = 3; i<6;i++){
          if(tasks[i].hasOwnProperty('procedureId') === false){ 
            tasks[i].procedureId = library[1].id;
          }
        }
        this.setState({
          library,
          tasks
        });
 }

  render() {
    const {library, tasks} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {
            this.state.projects.map((singleproject, index) =>{
              singleproject.projectId = index;  // this needs to be fixed later on to provide unique id
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
                    setProcedureId={this.setProcedureId}
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