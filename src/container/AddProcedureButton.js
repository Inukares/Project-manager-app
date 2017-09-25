import React, { Component } from 'react'
import Procedures from './Procedures.js'

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
//  width:'100%',
  textAlign:'center'
};

class AddProcedureButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isButtonClicked:false,
        }
    }
    
    onButtonToggle = (isButtonClicked) => {
        this.setState({
            isButtonClicked: !isButtonClicked
        })
    }

    render(){
        const isButtonClicked = this.state.isButtonClicked;
        return (
            <div>
            <RaisedButton
              label="Add procedure to your project"
              onClick={() => this.onButtonToggle(isButtonClicked)}
              secondary={true}
              style={style} 
              fullWidth={true}
            />
            {
            isButtonClicked && 
                <Procedures
                  library={this.props.library}
                  tasks={this.props.tasks}
                  onTaskToggle={this.props.onTaskToggle}
                  onProcedureToggle={this.props.onProcedureToggle}
                />
            }
            </div>
        )
    }
}

export default AddProcedureButton;