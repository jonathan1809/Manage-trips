import React, { Component } from 'react'
import Table from '../../components/Table'
import { connect } from 'react-redux'
import { Actions, Creators } from '../../services/redux/hotel'

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
            hotels: []

        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({ hotels: nextProps.hotels })
    }

    componentDidMount() {
        this.props.getHotels()
    }
    getIdHandler = (id) => {
        this.setState({ currentId: id })
    }


    shouldComponentUpdate(nextProps, nextState) {

        return this.state !== nextState
    }
    render() {
        const data = []
        const { hotels } = this.state
        for (let i = 0; i < hotels.length; i++) {
            const hotel = hotels[i];
            data[i] = { id: hotel.hotelID, name: hotel.name, url: hotel.url, stars: hotel.stars }
        }
        return (
            <div className='d-flex flex-column'>
                <div>
                    <h2>Hoteles {this.state.data.length}</h2>
                </div>
                {data.length > 0 ? <Table headers={this.state.headers} data={data} getId={this.getIdHandler} /> : null}

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        hotels: state.hotel.hotels,
        loading: state.hotel.loading,
        isError: state.hotel.error !== null ? false : true,
        error: state.hotel.error
    };
}

const mapDispatchToProps = {
    getHotels: () => Creators.getHotels()
}
export default connect(mapStateToProps, mapDispatchToProps)(Hotels)