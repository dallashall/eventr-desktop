import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form'
import Main from './main';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>Container</h1>
        {
          this.props.user ? <Main /> : <Form />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ ui }) => ({
  user: ui.user,
  event: ui.event,
});

export default connect(mapStateToProps, null)(Container);
