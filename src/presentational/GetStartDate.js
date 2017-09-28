import React, {Component} from 'react'
import Subheader from 'material-ui/Subheader'
import DatePicker from 'material-ui/DatePicker';
import dates from '../customstylesheets/dates.css';


export default class GetStartDate extends Component {
    constructor(props){
        super(props);
    }

    renderDate = () => {
        const DateComponent = (
            <div>
                 <Subheader>When do want to start your project?</Subheader>
                    <DatePicker 
                      onChange={(e, date) => {this.props.handleStartDate(e, date, this.props.project)}} 
                      value={this.props.project.startDate}
                      id="date"
                    />
            </div>
        )
        return <div>{DateComponent}</div>
    }

    render(){
        return (
            <div>
                {this.renderDate()}
            </div>
        )
    }
}  