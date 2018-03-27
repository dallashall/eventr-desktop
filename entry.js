// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import io from 'socket.io-client';

let defaultState = {
  count: 1
};

let state;

const socket = io('http://localhost:8000', {
  query: {
    room: 'cool-room1',
  }
});
console.log('loaded');
socket.on('update', (newState) => {
  state = newState.count ? newState : defaultState;
  console.log(state);
});

const nameBtn = document.getElementById('name-btn');
nameBtn.addEventListener('click', (e) => {
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;
  console.log(name);
});

const updateStateBtn = document.getElementById('update-state-btn');
updateStateBtn.addEventListener('click', (e) => {
  state.count++;
  socket.emit('update', { count: state.count });
});
