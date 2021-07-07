/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
const initialState = {
  items: [],
  activeAreas: [],
  isLoaded: false,
}

function checkMatches(active, array) {
  return active.every(item => {
    const simpleArray = []
    const alternativeArray = []

    array.forEach(obj => {
      if (obj.hasOwnProperty('alternative')) {
        simpleArray.push(obj.main._id)
        alternativeArray.push(obj.alternative._id)
      } else {
        simpleArray.push(obj.main._id)
      }
    })

    return simpleArray.includes(item) || alternativeArray.includes(item)
  })
}

function findAreasBySubjects(active, areas) {
  const set = new Set()

  areas.forEach(element => {
    if (checkMatches(active, element.exams)) {
      set.add(element)
    }
  })

  return Array.from(set)
}

const areas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AREAS_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    case 'SET_AREAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case 'GET_AREAS_BY_SUBJECTS': {
      const filteredItems = findAreasBySubjects(action.payload, state.items)

      return {
        ...state,
        activeAreas: filteredItems,
      }
    }
    default:
      return state
  }
}

export default areas
