import React from 'react';
import { Route } from 'react-router-dom';
import Hotels from '../../containers/Hotels';
import Menu from '../../components/Menu';
const index = (props) => {
    return (
        <Menu>
            <Route path={props.match.url + 'Hoteles'} exact component={Hotels} />
        </Menu>
    )
}
export default index
