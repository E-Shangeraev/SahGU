import { combineReducers } from 'redux'
import filter from './filter'
import areas from './areas'
import subjects from './subjects'

const rootReducer = combineReducers({ filter, areas, subjects })

export default rootReducer
