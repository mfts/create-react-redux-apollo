import { combineReducers } from 'redux'
import client from '../apollo'

const rootReducer = combineReducers({
	apollo: client.reducer() // Root reducer with apollo client added
});

export default rootReducer;