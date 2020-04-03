import { combineReducers } from 'redux';
import { todoActionCreatorReducer } from './todoReducer';
import { visibleFilterReducer } from './visibleFilterActionCreatorReducer';

const rootReducer = combineReducers({
    todos: todoActionCreatorReducer,
    visibleFilter: visibleFilterReducer
});

export default rootReducer;

