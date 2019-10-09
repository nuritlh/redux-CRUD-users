import React from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import moment from 'moment';

import  { editUser } from '../../actions';
import '../modal/UserModal';

class EditUser extends React.Component {
    
    constructor(props) {
        super(props);
         this.state ={
            firstName: this.props.user.name.first,
            lastName: this.props.user.name.last,
            email: this.props.user.email,
            birthday: this.props.user.dob.date,
            age: this.props.user.dob.age,
            country: this.props.user.location.country,
            city: this.props.user.location.city,
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
        let newUser = this.props.user;
        newUser['name']['first'] = this.state.firstName;
        newUser['name']['last'] = this.state.lastName;
        newUser['location']['city'] = this.state.city;
        newUser['location']['country'] = this.state.country;
        newUser['email'] = this.state.email;
        newUser['dob']['date'] = this.state.birthday;
        newUser['dob']['age'] = this.state.age;
        newUser['name']['last'] = this.state.lastName;
        
        this.props.editUser(newUser);
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
                                defaultValue={this.props.user.name.first}
                                name="firstName"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Last name"
                                onChange={this.handleChange}
                                defaultValue={this.props.user.name.last}
                                name="lastName"
                                required/>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="email address"
                                onChange={this.handleChange}
                                defaultValue={this.props.user.email}
                                name="email"
                                required/>
                            <input
                                type="number"
                                className="form-input"
                                placeholder="age"
                                onChange={this.handleChange}
                                defaultValue={this.props.user.dob.age}
                                name="age"
                                required/>
                            <input
                                type="date"
                                className="form-input"
                                placeholder="Birthday"
                                onChange={this.handleChange}
                                defaultValue={moment(this.props.user.dob.date).format("YYYY-MM-DD").toString()}
                                name="birthday"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Country"
                                onChange={this.handleChange}
                                defaultValue={this.props.user.location.country}
                                name="country"
                                required/>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="City"
                                onChange={this.handleChange}
                                defaultValue={this.props.user.location.city}
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
                        <button type="submit" className="ui primary button">Update</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps, {editUser })(EditUser);