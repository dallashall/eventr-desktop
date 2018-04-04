import { combineReducers } from 'redux';
import controls from './controls';
import entities from './entities';
import ui from './ui';

export default combineReducers({
  controls,
  entities,
  ui,
});
