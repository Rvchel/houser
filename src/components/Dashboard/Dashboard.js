import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
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




    render() {
        //houses data base put info into table
        let {houses} = this.state
        let displayHouses = houses.map(houses => {
            return (
                <House
                key={houses.id}
                />
            )
        })
        
        
        
        
        
        
        return (
            <div>
                Dashboard
                <Link to='/Wizard'>Add New Property</Link>
                <p>Home Listings</p>
            </div>
        )
    }
}

export default Dashboard;
