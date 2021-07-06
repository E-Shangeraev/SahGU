const initialState = {
  items: [],
  active: [],
  isLoaded: false,
}

const subjects = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBJECTS_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    case 'SET_SUBJECTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case 'SET_ACTIVE_SUBJECTS':
      return {
        ...state,
        active: [...state.active, action.payload],
      }
    case 'REMOVE_ACTIVE_SUBJECTS': {
      const filteredActiveItems = [...state.active].filter(
        id => id !== action.payload
      )
      return {
        ...state,
        active: filteredActiveItems,
      }
    }
    default:
      return state
  }
}

export default subjects
