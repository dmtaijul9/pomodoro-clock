import { combineReducers } from "redux";
import breakReducer from "./breakRedux/breakReducer";
import sessionReducer from "./sessionRedux/sessionReducer";
import pauseReducer from "./pauseRedux/pauseReducer";
import isSessionReducer from "./showRedux/isSession";
import countReducer from './countRedux/countReducer'


const rootReducer = combineReducers({
    break: breakReducer,
    session: sessionReducer,
    pause: pauseReducer,
    isSession: isSessionReducer,
    count: countReducer
    
})

export default rootReducer;