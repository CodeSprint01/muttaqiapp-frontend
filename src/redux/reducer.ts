import {combineReducers} from 'redux';
import reducer from './user/reducer';

const rootReducer = combineReducers({
  userData: reducer,
});
export default rootReducer;
