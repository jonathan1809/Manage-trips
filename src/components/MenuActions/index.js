import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Actions } from '../../services/redux/menuActions/';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
});

class MenuActions extends React.Component {
    state = {
        open: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open })
    }
    handleDrawerClose = () => {
        this.props.changeMenu(false)
    };

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        const { actions } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='right'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Divider />
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? null : null}
                        </IconButton>
                    </div>
                    <List>
                        <ListItem >
                            <ListItemIcon>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </ListItemIcon>

                        </ListItem>

                        {actions.map((action) => (
                            <ListItem button key={action.text} onClick={action.handler}>
                                <ListItemIcon>{action.icon}</ListItemIcon>
                                <ListItemText primary={action.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            </div>
        );
    }
}

MenuActions.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {

        open: state.menuActions.open
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenu: (open) => { dispatch({ type: Actions.CHANGE_MENU_VIEW, open: open }) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(MenuActions)));