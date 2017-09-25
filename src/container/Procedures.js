import React, { Component } from 'react';
import ProceduresList from '../presentational/ProceduresList'

export default class Procedures extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div>
                    {
                        <ProceduresList
                          library={this.props.library}
                          tasks={this.props.tasks}
                          onTaskToggle={this.props.onTaskToggle}
                          onProcedureToggle={this.props.onProcedureToggle}
                        />
                    }
            </div>
        );
    }
}