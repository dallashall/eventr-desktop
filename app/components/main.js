import io from 'socket.io-client';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUISocket } from '../actions/ui';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      user,
      event,
      setUISocket,
    } = this.props;
    const socket = io('http://localhost:8000', {
      query: {
        room: event,
        user
      }
    });
    setUISocket(socket);
    socket.on(`hydrateUser:${user.id}`, (newState) => {
      console.log('Hydrating with: ', newState);
    });

    // const nameBtn = document.getElementById('name-btn');
    // nameBtn.addEventListener('click', (e) => {
    //   const nameInput = document.getElementById('name-input');
    //   const name = nameInput.value;
    //   console.log(name);
    // });

    // const updateStateBtn = document.getElementById('update-state-btn');
    // updateStateBtn.addEventListener('click', (e) => {
    //   state.count++;
    //   socket.emit('update', { count: state.count });
    // });
  }

  render() {
    const {
      user,
      event
    } = this.props;
    console.log('main', this.props)
    return (
      <div className="container">
        <p>{user.userName}</p>
        <p>{event}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ ui }) => ({
  user: ui.user,
  event: ui.event,
  socket: ui.socket,
});

const mapDispatchToProps = {
  setUISocket
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
