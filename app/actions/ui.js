import uuid from 'uuid';
import action from '../utils/action';

export const RECEIVE_UI_USER = 'RECEIVE_UI_USER';
export const RECEIVE_UI_SOCKET = 'RECEIVE_UI_SOCKET';
export const REMOVE_UI_USER = 'REMOVE_UI_USER';
export const REORDER_UI_USERS = 'REORDER_UI_USERS';
export const SET_CURRENT_CARD = 'SET_CURRENT_CARD';

export const setUIUser = user => dispatch => (
  dispatch(action(RECEIVE_UI_USER, { userName: user, id: uuid() }))
);

export const setUISocket = socket => dispatch => (
  dispatch(action(RECEIVE_UI_SOCKET, socket))
);
