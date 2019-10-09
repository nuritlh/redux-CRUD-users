import React from 'react';
import { connect } from 'react-redux';

import  { fetchRandomUser } from '../actions';
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

    addRandomUser = () => {
        this.props.fetchRandomUser();
    }

    render() {
        return (
            <div className="container"  style={{marginTop: '20px'}}>
                <div className="actions">
                    <button className="ui primary button" onClick={this.openAddUserMoal}>New</button>
                    <button className="ui primary button" onClick={this.addRandomUser}>Random</button>
                </div>
                {this.renderAddUserModal()}
                <div className="ui container users-wrapper">
                    <UserList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps, { fetchRandomUser })(App);