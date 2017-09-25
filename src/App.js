import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './TopBar.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import ExpandingCard from './ExpandingCard.js'
import Procedure from './Procedure.js'
import './App.css';

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
    id:1, // still not sure about it
    tasks:[  
      {
        taskName:'dig at least 1m deep', isCompleted:false 
      },
      {
        taskName:'At least 50m wide digging', isCompleted:false
      },
      {
        taskName:'Buy megazords', isCompleted:false
      }
    ]
  }, // end of build foundations procedure
  {
    procedureName:'Building the roof',
    id:2,
    tasks:[
      {
        taskName:'Constructed according to the project', isCompleted:false 
      },
      {
        taskName:'Defend wood from humidity', isCompleted:false
      },
      {
        taskName:'Roof build with the correct angle', isCompleted:false
      }
    ]
  } // end of building the roof procedure
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
  render() {
    const {projects, library, expanded} = this.state;
    return (
      <MuiThemeProvider>
        <div>
        <TopBar/>
        <ExpandingCard projects={projects} />
        <Procedure library={library}/>
        <ListingTheTasks library={library}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const ListingTheTasks = (props) => {
 const list = (
    props.library.map((task, index) => { // under this line goes mapping through procedures
      task.tasks.map((element, id) => {
        return <p>{element.taskName}</p>
      })
    })
  ); 
  return <div>{list}</div> 
}


//export default AppBarExampleIcon;

export default App;
