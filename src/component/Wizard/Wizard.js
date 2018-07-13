import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {

    render(){
        return(
            <div>
                <div>
                <h1>Add New Listing</h1>
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/Wizard/Step1' component={StepOne}/>
                <Route path='/Wizard/Step2' component={StepTwo}/>
                <Route path='/Wizard/Step3' component={StepThree}/>
                </div>
            </div>
        )
    }
}

export default Wizard