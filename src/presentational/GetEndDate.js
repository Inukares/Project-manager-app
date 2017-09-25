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