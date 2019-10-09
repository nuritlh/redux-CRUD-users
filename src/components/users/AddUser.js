import React from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';

import  { addUser } from '../../actions';
import '../modal/UserModal';

class AddUser extends React.Component {
    
    constructor(props) {
        super(props);
         this.state ={
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            birthday: '',
            country: '',
            city: '',
            pictures: []
        }
         this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleChange = event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState({ state });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newUser = {
            name: {
                first: this.state.firstName,
                last: this.state.lastName,
            },
            location: {
                city: this.state.city,
                country: this.state.country,
            },
            email: this.state.email,
            dob: {
                age: this.state.age,
                date: this.state.birthday
            },
            cell: Math.random(), //should create real id..
            picture: {
                large: 'http://www.esek.org.gr/images/ESET/eset_user.png'
            }
        }
        this.props.addUser(newUser);
        this.props.close();
      };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.close}>&times;</span>
                    <div className="details-wrapper">
                    <form className="ui fluid form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="First name"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                name="firstName"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Last name"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                name="lastName"
                                required/>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="email address"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                required/>
                            <input
                                type="number"
                                className="form-input"
                                placeholder="age"
                                onChange={this.handleChange}
                                value={this.state.age}
                                name="age"
                                required/>
                            <input
                                type="date"
                                className="form-input"
                                placeholder="Birthday"
                                onChange={this.handleChange}
                                value={this.state.birthday}
                                name="birthday"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Country"
                                onChange={this.handleChange}
                                value={this.state.country}
                                name="country"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="City"
                                onChange={this.handleChange}
                                value={this.state.city}
                                name="city"
                                required/>
                        </div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        <button type="submit" className="ui primary button">Add</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, { addUser })(AddUser);