import React, { Component } from 'react';

class AddUserForm extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "",
                id: 0,
            },
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        let user = this.state.user;
        user.name = event.target.value;
        this.setState(
            {
                user: this.state.user
            }
        );
    }
    
    handleSubmit(event) {
        this.refs.userInput.value = '';
        event.preventDefault();
        this.props.push(this.state.user);
        let user = {
            name: this.refs.userInput.value,
            id: ++this.state.user.id
        };
        
        this.setState(
            {
                user: user
            }
        );
    }
    
    render() {
        return (
            <div className="commentForm vert-offset-top-2">
                <form className="user-push form-horizontal vert-offset-top-2" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="user" className="col-md-2 control-label">User</label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                id="user"
                                ref="userInput"
                                className="user-input form-control"
                                onChange={this.handleInputChange} />
                            <div className="row">
                                <div className="col-md-10 col-md-offset-2 text-right">
                                    <button className="user-btn-push btn btn-primary">Push this user</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddUserForm;