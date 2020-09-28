import {combineReducers} from 'redux';
import colorReducer from './color';
import colorHoverReducer from './hovercolor';


const allReducer=combineReducers({
    colorReducer:colorReducer,
    colorHoverReducer:colorHoverReducer
})

export default allReducer