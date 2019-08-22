import React from 'react';
import './App.css';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import List from '../Screens/List';
import Calendar from '../Screens/Calendar';
import Focus from '../Screens/Focus';
import Notes from '../Screens/Notes';
import Task from '../Screens/Task';
import Projects from '../Screens/Projects/Projects';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navIsActive: false,
    activeScreen: 'list' };
  }

  setNav() {
    this.setState({ navIsActive: !this.state.navIsActive})
  }

  setScreen(target) {
    this.setNav();
    this.setState({activeScreen: target})
  }
  
  render() {
    return (
      <div className="App">
        <Header navActive={this.state.navIsActive} setNav={this.setNav.bind(this)} curScreen={this.state.activeScreen} />
        {this.state.navIsActive && <Nav setScreen={this.setScreen.bind(this)} />}
        {this.state.activeScreen === 'list' && <List />}
        {this.state.activeScreen === 'focus' && <Focus />}
        {this.state.activeScreen === 'calendar' && <Calendar />}
        {this.state.activeScreen === 'notes' && <Notes />}
        {this.state.activeScreen === 'task' && <Task />}
        {this.state.activeScreen === 'projects' && <Projects />}
        <Footer />
      </div>
    );
  }
}

export default App;
