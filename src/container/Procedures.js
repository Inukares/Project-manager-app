import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
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
                <Card>
                    {
                        <ProceduresList
                          library={this.props.library}
                          tasks={this.props.tasks}
                          onTaskToggle={this.props.onTaskToggle}
                          onProcedureToggle={this.props.onProcedureToggle}
                        />
                    }
                </Card>
            </div>
        );
    }
}