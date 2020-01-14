import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import List from '../List';
import Calendar from '../Calendar';
import Focus from '../Focus';
import Notes from '../Notes';
import Task from '../Task';
import Projects from '../Projects';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/todo' component={List} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/focus' component={Focus} />
            <Route path='/notes' component={Notes} />
            <Route path='/projects' component={Projects} />
            <Route path='/task' component={Task} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
