import React from 'react'
import UtilUserData from '../../config/config';
import { Redirect } from 'react-router-dom';
const logout = () => {
    UtilUserData.cleanStorage();
    return(
        <Redirect to='/Login' />
    )
}

export default logout