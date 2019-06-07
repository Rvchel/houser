import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import {updateName, updateAdress, updateCity, updateState, updateZip, updateImg, getHouses} from '../../store';

class Wizard extends Component {
    constructor() {
        super();
        this.state= {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0, 
            redirect: false
        }; 
            // this.handleChange = this.handleChange.bind(this) 
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            axios.get('/api/houses')
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




    componentDidUpdate(prevProps) {
        if(this.props.match.params.id!==prevProps.match.params.id) {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                houses: []
            })
        }
    }

    
    
    
updateName(value) {
this.setState({name: value})
console.log(value)
}


updateAddress(value) {
this.setState({adress: value})
console.log(value)
}

updateCity(value) {
    this.setState({city: value})
    console.log(value)
    }






handleEditSave() {
let { name, address, city, state, zip } = this.state,
    { id } = this.props.match.params;
    
axios.put('/api/house/:id', {name:name, address:address, city:city, state:state, zip:zip })
    .then(this.setState({ redirect:true }))
    .catch(error => console.log('wizard put'))
}




    render() {
        let {updateName, updateAddress, updateCity, updateState, updateZip, updateImg} = this.props
        return (
            <div>
                Wizard
                <Link to='/'>Cancel</Link>


                Property Name<input type='text' value={updateName} name='name' onChange={(e) => this.updateName(e.target.value)} value={this.state.name} />

                Address<input type='text' value={updateAddress} name='address' onChange={(e) => this.updateAddress(e.target.value)} value={this.state.address} />

                City<input type='text' value={updateCity} name='city' onChange={(e) => this.updateCity(e.target.value) } value={this.state.city} />

                <button onClick={() => this.handleEditSave()}>Complete</button>
            
            
            </div>
        )
    }
}

export default Wizard;