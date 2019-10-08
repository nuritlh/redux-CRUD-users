import React from 'react';

import UserModal from '../modal/UserModal';
import EditUser from './EditUser';

class UserCard extends React.Component {

    state = {
        isShowingUser: false,
        isEditUser: false
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

    closeModalHandler = () => {
        this.setState({
            isShowingUser: false,
            isEditUser: false

        });
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
                    <span >
                    <i className="heart icon" ></i>
                    22 Matches
                    </span>
                    
                </div>
                <span className="edit-icon" onClick={this.editUser}><i className="edit icon"></i></span>
                <button className="ui button" onClick={this.selectUser}>more...</button>
            </div>
            {this.renderUserModal()}
            {this.renderEditUser()}
        </>
        )
    }
}

export default UserCard;