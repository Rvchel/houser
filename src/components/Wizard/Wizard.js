import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();
        this.state= {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }; 
            this.handleChange = this.handleChange.bind(this) 
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            axios.get('/api/properties')
            .then(response => {
                this.setState({
                    name: response.data[0].name ,
                    address: response.data[0].address ,
                    city: response.data[0].city ,
                    state: response.data[0].state ,
                    zip: response.data[0].zip
                })
            })
            .catch(error => {
                console.log('Wizard get')
            })
        } else {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0
            })
        }
    }

    
    
    
    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
        console.log(e)
    }

    


    render() {
        let {name, address, city, state, zip} = this.state
        return (
            <div>
                Wizard
                <Link to='/'>Cancel</Link>


                Property Name<input type='text' value={name} name='name' onChange={this.handleChange} />

                Address<input type='text' value={address} name='address' onChange={this.handleChange} />

                City<input type='text' value={city} name='city' onChange={this.handleChange} />
            
            
            </div>
        )
    }
}

export default Wizard;