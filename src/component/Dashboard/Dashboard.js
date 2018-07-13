import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = '/api/houses';
class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)
    }
    componentDidMount(){
        axios.get(baseUrl).then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(error => {
            console.log('Axios Error with componentDidMount', error)
        })
    }
    getHouses = () => {
        axios.get(baseUrl).then(response => {
            this.setState({
                houses: response.data
            })
        }).catch(error => {
            console.log('Axios Error with getHouses', error)
        })
    }
    deleteHouse = (id) => {
        axios.delete(`${baseUrl}/${id}`).then(response => {
            this.setState({
                houses: response.data
            })
            this.getHouses();
        }).catch(error => {
            console.log('Axios Error with deleteHouse', error)
        }) 
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/Wizard/Step1'><button> Add New Property</button></Link>
                <hr />
                <h3> Home Listings </h3>
                {this.state.houses.map((house,i) => <div key={i}><House {...house} deleteHouse={this.deleteHouse}/></div>)}
            </div>
        )
    }
}

export default Dashboard