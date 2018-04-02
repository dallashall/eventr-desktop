import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUIUser } from '../actions/ui';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      userName: '',
    };
  }

  fill(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  submit = e => {
    e.preventDefault();
    this.props.setUIUser(this.state.userName);
  }

  render() {
    const {
      event,
      userName
    } = this.props;

    return (
      <div className="container">
        <h1>Form</h1>
        <label>Event</label>
        <input value={event} onChange={this.fill('event')} />
        <label>User Name</label>
        <input value={userName} onChange={this.fill('userName')} />
        <button onClick={this.submit} >
          GO!
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setUIUser
};

export default connect(null, mapDispatchToProps)(Form);
