import React from 'react';
import { connect } from 'react-redux';

import UserModal from '../modal/UserModal';
import EditUser from './EditUser';
import UserMatch from './UserMatch';
import  { deleteUser } from '../../actions';
import Sercives from '../../services';

class UserCard extends React.Component {

    state = {
        isShowingUser: false,
        isEditUser: false,
        isShowingMatch: false,
        matches: null
    }

    editUser = (event) => {
        event.preventDefault();
        this.setState({
            isEditUser: true,
        });
    }

    selectUser = (event) => {
        event.preventDefault();
        this.setState({
          isShowingUser: true,
        });
    }

    renderEditUser = () => {
        if(this.state.isEditUser) {
            return (
                <EditUser
                    className="modal"
                    show={this.state.isEditUser}
                    close={this.closeModalHandler}
                    user={this.props.user}>
                </EditUser>
            )
        }
    }

    renderUserModal = () => {
        if(this.state.isShowingUser) {
            return (
                <UserModal
                    className="modal"
                    show={this.state.isShowingUser}
                    close={this.closeModalHandler}
                    user={this.props.user}>
                </UserModal>
            )
        }
    }

    deleteUser = () => {
        this.props.deleteUser(this.props.user)
    }

    closeModalHandler = () => {
        this.setState({
            isShowingUser: false,
            isEditUser: false,
            isShowingMatch: false
        });
    }

    userMatches = (event) => {
        const matches = Sercives.userMatches(this.props.users, this.props.user);
        event.preventDefault();
        this.setState({
            isShowingMatch: true,
            matches: matches
        })
        console.log('matches', matches);
        
    }
    renderMatches = () => {
        if(this.state.isShowingMatch) {
            return (
                <UserMatch
                    className="modal"
                    show={this.state.isShowingMatch}
                    close={this.closeModalHandler}
                    matches={this.state.matches}>
                </UserMatch>
            )
        }
    }
    render() {
        return (
            <>
            <div className="ui four wide column card">
                <div className="image">
                    <img src={this.props.user.picture.large} alt="avatar" />
                </div>
                <div className="content">
                    <span className="header">{this.props.user.name.first} {this.props.user.name.last}</span>
                    <div className="meta">
                    <span className="date">{this.props.user.email}</span>
                    </div>
                </div>
                <div className="extra content">
                    <span className="matches" onClick={this.userMatches}>
                    <i className="heart icon" ></i>
                        User Matches
                    </span>
                    
                </div>
                <div className="action-icon">
                    <span onClick={this.editUser}><i className="edit icon"></i></span>
                    <span onClick={this.deleteUser}><i className="delete icon"></i></span>
                </div>
                <button className="ui button" onClick={this.selectUser}>more...</button>
            </div>
            {this.renderUserModal()}
            {this.renderEditUser()}
            {this.renderMatches()}
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps, { deleteUser })(UserCard);