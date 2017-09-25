import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import ListExampleNested from './ListExampleNested.js'

export default class Procedure extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    //  console.log(this.props.library.map);

    }
   
    render() {
      return (
          <div>
            <Card>
                {
                    this.props.library.map(task => {
                        return <p key={task.id}>{task.procedureName} </p>
                })
                }
            </Card>
          </div>
      );
    }
  }

  //   <ListExampleNested library={this.props.library}/>