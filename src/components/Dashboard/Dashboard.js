import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Wizard from '../Wizard/Wizard';
import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();
        this.state= {
            houses: []
        }
    }


    componentDidMount() {
        axios.get('/api/houses')
        .then(response => this.setState({houses: response.data}))
        .catch(error => console.log('Dash get'))
    };


    deleteHouse(id) {
        axios.delete(`/api/house/${id}`)
        .then(() => this.componentDidMount)
    };




    render() {
        //houses data base put info into table
        let {houses} = this.state
        let displayHouses = houses.map(houses => {
            return (
                <House
                key={houses.id}
                id={houses.id}
                name={houses.name}
                address={houses.address}
                city={houses.city}
                zip={houses.zip}
                />
            )
        })
        
        
        
        
        
        
        return (
            <div>
                Dashboard
                <Link to='/Wizard'>Add New Property</Link>
                <p>Home Listings</p>
                {/* {displayHouses} */}
                {/* <Wizard houses={this.props.houses} /> */}
            </div>
        )
    }
}

export default Dashboard;
