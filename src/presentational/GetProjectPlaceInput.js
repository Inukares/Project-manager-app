import React from 'react'
import { FormGroup,  Button, FormControl, ControlLabel } from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader'

const GetProjectPlaceInput = props => {
    const Input = (
    <div>
        <Subheader>Where does your project take place?</Subheader>
        <form className="form-inline" onSubmit={(e) => {props.handleWhereInput(e, props.project)}}>
            <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                <input ref={input => this.where = input} type="text" placeholder="Where?" className="form-control"  id="where"></input>
            </div>
            <Button type="submit" bsStyle="primary">Add</Button>
        </form>
    </div>
    )
    return <div>{Input}</div>
}

export default GetProjectPlaceInput;