import React from 'react'
import Subheader from 'material-ui/Subheader'
import DatePicker from 'material-ui/DatePicker';
import dates from '../customstylesheets/dates.css';


const GetEndDate = props => {
    const Input = (
    <div >
        <Subheader>When would you like to end it?</Subheader>
        <DatePicker 
          onChange={(e, date) => {props.handleEndDate(e, date, props.project)}}
          id="date" 
          minDate={props.project.startDate} 
          value={props.project.endDate}
          />
    </div>
    )
    return <div>{Input}</div>
}

export default GetEndDate;


/*     const Input = (
    <div >
        <Subheader>When do want to start your project?</Subheader>
        <DatePicker 
          onChange={(e, date) => {props.handleStartDate(e, date, props.project)}} 
          value={props.project.startDate}
          id="date"
          />
    </div>
    )
    return <div>{Input}</div> */