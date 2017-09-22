import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends React.Component {
    componentWillMount() {
        this.props.fetchUsers();
    }
    renderUser() {
        return (
            <div className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.something}</p>
                <a className="btn btn-primary">{user.otherthing}</a>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return { users };
}

export default connect(mapStateToProps, actions)(UserList);