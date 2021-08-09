import { combineReducers } from 'redux'
import filter from './filter'
import areas from './areas'
import subjects from './subjects'
import institutes from './institutes'

const rootReducer = combineReducers({ filter, areas, subjects, institutes })

export default rootReducer
