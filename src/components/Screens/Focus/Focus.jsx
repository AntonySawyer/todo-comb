import React from 'react';
import './Focus.css';
import { PrimeZero } from '../../../utils/timeFormat';

class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '00',
      minutes: '15',
      seconds: '00',
      started: false
    };
    this.stopTimer = this.stopTimer.bind(this);
  }

  secondsRemaining = 0;
  intervalHandle = 0;

  setMinutes(event) {
    //event - onChange handler || buttons arg
    const min = event.target !== undefined ? event.target.value : event;
    const hours = Math.floor(min / 60).toFixed(0);
    this.setState({
      hours: PrimeZero(hours),
      minutes: PrimeZero(min - hours*60)
    })
  }

  tick() {
    let hours = Math.floor(this.secondsRemaining / 3600).toFixed(0);
    let min = Math.floor(this.secondsRemaining % 3600 / 60);
    let sec = this.secondsRemaining - min*60 - hours*3600;
    this.setState({
      hours: PrimeZero(hours),
      minutes: PrimeZero(min),
      seconds: PrimeZero(sec),
    })
    if (this.secondsRemaining === 0) {
      this.stopTimer();
      alert('Success!');
    }
    this.secondsRemaining--;
  }

  startTimer() {
    this.intervalHandle = setInterval(this.tick.bind(this), 1000);
    this.secondsRemaining = this.state.hours*3600 + this.state.minutes*60 - 1; //-1 to fix delay between real start and render
    this.setState({ started: true })
  }

  stopTimer() {
    clearInterval(this.intervalHandle);
    this.setState({ started: false, hours: '00', minutes: '00', seconds: '00' })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <h3>Stay focused in:</h3>
            <input type="range" min="15" max="480" step="15" onChange={this.setMinutes.bind(this)} defaultValue="15" />
            <button onClick={() => this.setMinutes(15)}>15 min</button>
            <button onClick={() => this.setMinutes(30)}>30 min</button>
            <button onClick={() => this.setMinutes(60)}>1 hour</button>
            <input type="number" id="minInput" min="1" onChange={this.setMinutes.bind(this)} required placeholder="Or type" defaultValue="15" />
          </div>
          <div>
            <h1>{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}</h1>
          </div>
          <div>
            <button disabled={this.state.started} onClick={this.startTimer.bind(this)}>Focus!</button>
            <button disabled={!this.state.started} onClick={this.stopTimer}>Stop!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Focus;


