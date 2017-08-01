import React, { Component } from 'react';

class User extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete() {
        this.props.delete(this.props.user);
    }
    
    render() {
        let user = this.props.user;
        
        return (
            <li className="list-group-item clearfix">
            <div className="user-item">
                <span className="user-name">{user.name}</span>
                <div className="pull-right">
                    <button className="user-delete btn btn-xs btn-danger img-circle" onClick={this.handleDelete}>&#xff38;</button>
                </div>
            </div>
            </li>
        )
    }
}

export default User;
