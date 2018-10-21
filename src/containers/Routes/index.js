import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import AdminRoutes from '../../hoc/AdminRoutes';
import Logout from '../../components/LogOut';
import UtilUserData from '../../config/config';
class index extends Component {
    render() {                
        return (
            <Switch>               
                <Route path='/Login' exact component={Login} />                
                <Route path='/Logout' exact component={Logout} />
                {UtilUserData.verifyIsLogged ? <Route path='/' component={AdminRoutes} /> : null}                
                <Route exact component={Login} />
            </Switch>
        )
    }
}

export default withRouter(index)
