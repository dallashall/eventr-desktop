import io from 'socket.io-client';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUISocket } from '../actions/ui';
import dispatchAction from '../actions/socket';

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
      dispatchAction,
    } = this.props;
    const socket = io('http://localhost:8080', {
      query: {
        payload: JSON.stringify({
          room: event || 'test',
          user
        }),
      },
    });
    setUISocket(socket);
    socket.on(`hydrateUser:${user.id}`, (hydrateState) => {
      console.log('Hydrating with: ', hydrateState);
      dispatchAction(hydrateState);
    });
    socket.on('action', action => dispatchAction(action));

    // const updateStateBtn = document.getElementById('update-state-btn');
    // updateStateBtn.addEventListener('click', (e) => {
    //   state.count++;
    //   socket.emit('update', { count: state.count });
    // });
  }

  clear = () => {
    this.props.socket.emit('clear');
  }

  render() {
    const {
      user,
      event,
      users,
    } = this.props;
    console.log('main props', this.props);
    return (
      <div className="container">
        <p>{user.userName}</p>
        <p>event: {event}</p>
        <ul>
          {
            users.ids.map(id => <li key={id}>{users.byId[id].userName}</li>)
          }
        </ul>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = ({ ui, entities }) => ({
  user: ui.user,
  event: ui.event,
  socket: ui.socket,
  users: entities.users,
});

const mapDispatchToProps = {
  setUISocket,
  dispatchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
