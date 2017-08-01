import React, { Component } from 'react';
import UsersList from './components/users-list/UsersList';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
        
        this.pushUser = this.pushUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    
    pushUser(user) {
        let users = this.state.users;
        users.push(user);
        this.setState(
            {
                users: users
            }
        );
    }
    
    deleteUser(user) {
        let users = this.state.users;
        this.setState(
            {
                users: users.filter(userItem => userItem.id !== user.id)
            }
        )
    }
    
  render() {
    return (
      <UsersList
          users={this.state.users}
          push={this.pushUser}
          delete={this.deleteUser}
      />
    )
  }
}

export default App;
