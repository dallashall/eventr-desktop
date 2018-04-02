import {
  RECEIVE_UI_USER,
  RECEIVE_UI_SOCKET,
} from '../../actions/ui';

const defaultState = {
  user: undefined,
  room: undefined,
};

export default (ui = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_UI_USER:
      return { ...ui, user: payload };
    case RECEIVE_UI_SOCKET:
      return { ...ui, socket: payload };
    default:
      return ui;
  }
};
