import React, { Component } from 'react'
import UtilUserData from '../../config/config';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../services/redux/login/index'
class Logout extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        UtilUserData.cleanStorage();
        this.props.logout();
    }

    render() {
        return (
            <Redirect to='/Login' />
        )
    }

}
const mapDispatchToProps = {
    logout: () => actions.logOut()
}
export default connect(null, mapDispatchToProps)(Logout)