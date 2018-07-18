import React, { Component } from 'react';
import './Clock.scss';
import DateUtils from '../../commons/DateUtils'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const formatDate = DateUtils.dateFormats.DD_MM_YYYY_kk_mm_ss;
    return (
      <div className="Clock">
        {DateUtils.toFormat(formatDate)}
      </div>
    );
  }
}

export default Clock;
