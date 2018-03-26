// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import io from 'socket.io-client';

const socket = io('http://localhost:8000');
console.log('loaded');
