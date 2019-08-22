import React from 'react';
import './Focus.css';
import { PrimeZero } from '../../../utils/timeFormat';

class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '00',
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
    this.setState({
      minutes: PrimeZero(min)
    })
  }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);

    this.setState({
      minutes: PrimeZero(min),
      seconds: PrimeZero(sec),
    })

    if (min === 0 && sec === 0) {
      this.stopTimer();
      alert('Success!');
    }
    this.secondsRemaining--;
  }

  startTimer() {
    this.intervalHandle = setInterval(this.tick.bind(this), 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({ started: true })
  }

  stopTimer() {
    clearInterval(this.intervalHandle);
    this.setState({ started: false, minutes: '00', seconds: '00' })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <h3>Stay focused in:</h3>
            <button onClick={() => this.setMinutes(5)}>5 min</button>
            <button onClick={() => this.setMinutes(25)}>25 min</button>
            <button onClick={() => this.setMinutes(50)}>50 min</button>
            <input type="number" id="minInput" onChange={this.setMinutes.bind(this)} required placeholder="Or type" />
          </div>
          <div>
            <h1>{this.state.minutes}:{this.state.seconds}</h1>
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


