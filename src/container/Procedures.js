import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import ListingTasks from './ListingTasks.js'
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
                        <ProceduresList library={this.props.library} onTaskToggle={this.props.onTaskToggle}/>
                    }
                </Card>
            </div>
        );
    }
}