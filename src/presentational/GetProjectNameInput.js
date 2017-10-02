import React from 'react'
import { Button } from 'react-bootstrap';
import Subheader from 'material-ui/Subheader'

const GetProjectNameInput = props => {
    const Input= (
    <div>
        <Subheader>Type the name of your project</Subheader>
        <form className="form-inline" onSubmit={(e) => {props.handleNameInput(e, props.project)}}>
            <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                <input ref={input => this.projectName = input} type="text" placeholder="Type in project name" className="form-control"  id="projectName"></input>
            </div>
            <Button type="submit" bsStyle="primary">Add</Button>
        </form>
    </div>
    )
    return <div>{Input}</div>
}

export default GetProjectNameInput;