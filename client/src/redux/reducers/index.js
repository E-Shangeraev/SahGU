import { combineReducers } from 'redux'
import filter from './filter'
import areas from './areas'
import subjects from './subjects'
import institutes from './institutes'
import visuallyImpared from './visually-impared'

const rootReducer = combineReducers({
  filter,
  areas,
  subjects,
  institutes,
  visuallyImpared,
})

export default rootReducer
