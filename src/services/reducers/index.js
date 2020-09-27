import {combineReducers} from 'redux';
import colorReducer from './color'

const allReducer=combineReducers({
    colorReducer:colorReducer
})

export default allReducer