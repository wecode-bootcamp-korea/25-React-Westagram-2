import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginShin from './pages/hyeriShin/Login/LoginShin';

import MainShin from './pages/hyeriShin/Main/MainShin';
import LoginKim from './pages/hyunjinKim/Login/LoginKim';
import MainKim from './pages/hyunjinKim/Main/MainKim';
import LoginKang from './pages/sunggooKang/Login/LoginKang';
import MainKang from './pages/sunggooKang/Main/MainKang';
import LoginHa from './pages/sangyoungHa/Login/LoginHa';
import MainHa from './pages/sangyoungHa/Main/MainHa';
import LoginLee from './pages/nayoungLee/Login/LoginLee';
import MainLee from './pages/nayoungLee/Main/MainLee';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/LoginShin" component={LoginShin} />
          <Route path="/mainShin" component={MainShin} />
          <Route path="/LoginKim" component={LoginKim} />
          <Route path="/mainKim" component={MainKim} />
          <Route path="/LoginHa" component={LoginHa} />
          <Route path="/mainHa" component={MainHa} />
          <Route path="/LoginKang" component={LoginKang} />
          <Route path="/mainKang" component={MainKang} />
          <Route path="/LoginLee" component={LoginLee} />
          <Route path="/mainLee" component={MainLee} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
