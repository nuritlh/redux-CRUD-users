import React from 'react';
import moment from 'moment';

import './UserModal.css';

const userModal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <div className="details-wrapper">
                    <div className="image content">
                        <div className="ui medium image">
                            <img src={props.user.picture.large} alt="movie poster"/>
                        </div>
                    </div>
                    <p></p>
                    <div className="description">
                        <p className="ui header">Full Name: {props.user.name.first} {props.user.name.last}</p>
                        <p>Birthday:  {moment(props.user.dob.date).format("MM/DD/YYYY")} </p>
                        <p>Email: {props.user.email}</p>
                        <p>Address: {props.user.location.country}, {props.user.location.city  }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userModal;

