import React from 'react'
import Subheader from 'material-ui/Subheader'
import DatePicker from 'material-ui/DatePicker';
import dates from '../customstylesheets/dates.css';


const GetStartDate = props => {
    const Input = (
    <div >
        <Subheader>When do you start your project?</Subheader>
        <DatePicker 
          onChange={(e, date) => {props.handleStartDate(e, date, props.project)}} 
          value={props.project.startDate}
          id="date"
          />
    </div>
    )
    return <div>{Input}</div>
}

export default GetStartDate;