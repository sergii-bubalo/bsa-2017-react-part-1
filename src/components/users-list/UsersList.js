import React, { Component } from 'react';
import AddUserForm from './../add-user-form/AddUserForm';
import User from './../user/User';

class UsersList extends Component {
    render() {
        let users = this.props.users;
        return (
            <div className="well">
                <h1 className="vert-offset-top-0">Users:</h1>
                <div className="users-list">
                    <ul className="list-group">
                        {users.map(user =>
                            <User key={user.id} user={user} delete={this.props.delete} />
                        )}
                    </ul>
                    <AddUserForm push={this.props.push} />
                </div>
            </div>
        )
    }
}

export default UsersList;
