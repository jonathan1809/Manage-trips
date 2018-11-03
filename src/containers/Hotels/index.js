import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';
import { connect } from 'react-redux';
import { Actions, Creators } from '../../services/redux/hotel';
import * as menuActions from '../../services/redux/menuActions';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuActions from '../../components/MenuActions';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Add, Edit, Delete, LineWeight } from '@material-ui/icons/';
class Hotels extends Component {
    constructor(props) {
        super(props)
        this.counter = 0;
        this.state = {
            headers: [
                { id: 'Nombre', numeric: false, disablePadding: false, label: 'Nombre' },
                { id: 'URL', numeric: false, disablePadding: false, label: 'URL' },
                { id: 'Estrellas', numeric: true, disablePadding: false, label: 'Estrellas' }
            ],
            data: [],
            currentId: 0,
            hotels: [],
            actions: [
                { text: 'Crear', icon: <Add />, handler: this.createHotel }
            ]

        }

    }

    componentWillReceiveProps(nextProps) {

        this.setState({ hotels: nextProps.hotels })
        this.createData(nextProps.hotels)
    }

    componentDidMount() {
        this.props.getHotels()

    }
    createData(hotels) {
        const data = []
        for (let i = 0; i < hotels.length; i++) {
            const hotel = hotels[i];
            data[i] = { id: hotel.hotelID, name: hotel.name, url: hotel.url, stars: hotel.stars }
        }
        this.setState({ data })
    }
    getIdHandler = (id) => {

        this.setState({ currentId: id })
    }

    openMenu = () => {
        this.props.changeMenu(true)
    }

    createHotel = () => {

    }

    viewInfoHotel = () => {

    }

    updateHotel = () => {

    }

    deleteHotel = () => {

    }

    shouldComponentUpdate(nextProps, nextState) {

        return this.state !== nextState
    }

    render() {
        const { data } = this.state
        return (
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <h2>Hoteles</h2>
                    <div className='ml-auto'>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.openMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
                {data.length > 0 ? <Table headers={this.state.headers} data={data} getId={this.getIdHandler} /> : <LinearProgress />}
                <MenuActions actions={this.state.actions} />
            </div>
        )
    }
}

Hotels.propTypes = {
    getHotels: PropTypes.func.isRequired,
    hotelSelected: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    hotels: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        hotels: state.hotel.hotels,
        loading: state.hotel.loading,
        isError: state.hotel.error !== null ? false : true,
        error: state.hotel.error,
        hotelID: state.hotel.hotelID,
        open: state.menuActions.open
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotels: () => dispatch(Creators.getHotels()),
        hotelSelected: (hotelID) => { dispatch({ type: Actions.STORE_HOTEL_ID, hotelID: hotelID }) },
        changeMenu: (open) => { dispatch({ type: menuActions.Actions.CHANGE_MENU_VIEW, open: open }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hotels)