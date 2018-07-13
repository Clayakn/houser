import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = '/api/houses';
class Wizard extends Component {
    constructor(){
        super(); 
        this.state = {
            name: '',
            address: '',
            city: '', 
            state: '',
            zip: 0
        }
    }
    changeInputName = (val) => {
        this.setState({
            name: val
        })
    }
    changeInputAddress = (val) => {
        this.setState({
            address: val
        })
    }
    changeInputCity = (val) => {
        this.setState({
            city: val
        })
    }
    changeInputState = (val) => {
        this.setState({
            state: val
        })
    }
    changeInputZip = (val) => {
        this.setState({
            zip: val
        })
    }
    submitHouse = () => {
        const {name, address, city, state, zip} = this.state
        axios.post(baseUrl, {name, address, city, state, zip}).then(response => {
        }).catch(error => {
            console.log('Axios Error with submitHouse', error)
        })
    }
    render(){
        return(
            <div>
                <h1>Add New Listing</h1>
                <Link to='/'><button>Cancel</button></Link>
                <div className='firstPage'>
                    <p>Property Name</p>
                    <input placeholder='Insert Name Here' onChange={e => this.changeInputName(e.target.value)}></input>
                    <p>Address</p>
                    <input placeholder='Insert Address Here' onChange={e => this.changeInputAddress(e.target.value)}></input>
                    <p>City</p>
                    <input placeholder='Insert City Here' onChange={e => this.changeInputCity(e.target.value)}></input>
                    <p>State</p>
                    <input placeholder='Insert State Here' onChange={e => this.changeInputState(e.target.value)}></input>
                    <p>Zipcode</p>
                    <input placeholder='Insert Zipcode Here' onChange={e => this.changeInputZip(e.target.value)}></input>
                <Link to='/'><button onClick={() => this.submitHouse()}>Complete</button></Link>
                </div>
            </div>
        )
    }
}

export default Wizard