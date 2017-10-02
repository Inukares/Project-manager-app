import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import ProceduresList from '../presentational/ProceduresList'

const style = {
  margin:'12px 12px 12px',
  marginLeft: '15px',
  padding: 0,
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
                <ProceduresList
                  library={this.props.library}
                  tasks={this.props.tasks}
                  onTaskToggle={this.props.onTaskToggle}
                  onProcedureToggle={this.props.onProcedureToggle}
                  handleActiveProcedures={this.props.handleActiveProcedures}
                />
            }
            </div>
        )
    }
}

export default AddProcedureButton;