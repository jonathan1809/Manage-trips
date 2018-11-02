import React from 'react';
import { Route } from 'react-router-dom';
import Hotels from '../../containers/Hotels';
import Layout from '../../containers/Layout';
const index = (props) => {
    return (
        <Layout>
            <Route path={props.match.url + 'Hoteles'} exact component={Hotels} />
        </Layout>
    )
}
export default index
