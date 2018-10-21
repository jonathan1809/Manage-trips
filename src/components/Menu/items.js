import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HotelIcon from '@material-ui/icons/Hotel';
import LogOut from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
const items = [
    { label: 'Hoteles', to: 'Hoteles', icon: <HotelIcon /> },
    { label: 'Cerrar sesión', to: 'Logout', icon: <LogOut /> }
]
const itemsMenu = (props) => (
    <List className={'root'}>
        {items.map((data, index) => (
            <Link to={props.match.url + data.to}>
                <ListItem button key={index}>
                    <ListItemIcon> {data.icon}</ListItemIcon>
                    <ListItemText primary={data.label} />
                </ListItem>
            </Link>

        ))}
    </List>
)

export default itemsMenu