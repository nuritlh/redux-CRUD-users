import React from 'react';
import { connect } from 'react-redux';

import  { fetchUsers } from '../../actions';
import UserCard from './UserCard';
import './User.css';

class UserList extends React.Component {
    
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderList = () => {
        return this.props.users.map(user => {
            return (
                <div className="ui four wide column card"  key={user.cell}>
                    <UserCard user={user}/>
                </div>
            )
        })
    }

    render() {
        return (
            <>
            {this.renderList()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps, {fetchUsers })(UserList);