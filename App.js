import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import { About } from './components/About'
import { Users } from './components/Users'
import { Navbar } from './components/Navbar'
import { Editadd } from './components/Editadd'

import { Index } from './components/Index'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/editadd" component={Editadd} />
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
