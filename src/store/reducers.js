import { combineReducers } from 'redux'

import Tasks from './tasks/reducer'

const rootReducer = combineReducers({
    Tasks,

})

export default rootReducer