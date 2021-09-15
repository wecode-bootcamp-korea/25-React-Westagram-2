import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/hyeriShin/Login/Login';
import Main from './pages/hyeriShin/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route  path="/" component={Login} />
                    <Route  path='/main' component ={Main} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;