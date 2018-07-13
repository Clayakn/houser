import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Wizard' component={Wizard}/>
    </Switch>

)