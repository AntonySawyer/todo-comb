import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import List from '../Screens/List';
import Calendar from '../Screens/Calendar';
import Focus from '../Screens/Focus';
import Notes from '../Screens/Notes';
import Task from '../Screens/Task';
import Projects from '../Screens/Projects/Projects';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navIsActive: false, activeScreen: 'list' };
  }

  setNav() {
    this.setState({ navIsActive: !this.state.navIsActive });
  }

  setScreen(target) {
    this.setNav();
    this.setState({ activeScreen: target });
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
          </Switch>
        </Router>
        {this.state.activeScreen === 'task' && <Task />}
        <Footer />
      </div>
    );
  }
}

export default App;
