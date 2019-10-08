import React from 'react';

import UserList from './users/UserList';
import AddUser from './users/AddUser';

import './App.css';

class App extends React.Component {

    state = {
        isShowing: false
    }

    openAddUserMoal = (event) => {
        event.preventDefault();
        this.setState({
            isShowing: true,
          });
    }

    renderAddUserModal = () => {
        if(this.state.isShowing) {
            return (
            <AddUser
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
            </AddUser>
            )
        }
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <div className="container"  style={{marginTop: '20px'}}>
                <div className="actions">
                    <button className="ui primary button" onClick={this.openAddUserMoal}>New</button>
                    <button className="ui primary button">Random</button>
                </div>
                {this.renderAddUserModal()}
                <div className="ui grid container">
                <UserList />
                </div>
            </div>
        )
    }
}

export default App;