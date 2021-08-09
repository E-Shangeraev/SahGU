const initialState = {
  items: [],
  isLoaded: false,
}

const institutes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INSTITUTES_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    case 'SET_INSTITUTES':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    default:
      return state
  }
}

export default institutes
