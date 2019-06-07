import React, {Components} from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />

        <Route exact path='/Wizard' component={Wizard} />
    </Switch>
);