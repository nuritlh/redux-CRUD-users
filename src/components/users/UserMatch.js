import React from 'react';

import '../modal/UserModal.css';

const UserMatch = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.close}>&times;</span>
                <div className="details-wrapper matches-wrapper">
                    {props.matches.map(match => {
                        return (
                            <div key={match.name} className="user-match">
                                <span className="title-match">{match.name} </span>
                                <i className="heart icon" ></i>
                                {match.value}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserMatch;

