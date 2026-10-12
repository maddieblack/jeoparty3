import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'

import Game from './Game';

import { socket } from './context/socket';

socket.on('connect_device', () => {
    socket.emit('connect_device', /Mobi/.test(navigator.userAgent));
});

Modal.setAppElement('#root');

ReactDOM.render(<Game />, document.getElementById('root'));
