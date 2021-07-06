const initialState = {
  qualification: 0,
  type: 0,
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_BY_QUALIFICATION':
      return {
        ...state,
        qualification: action.payload,
      }
    case 'SET_FILTER_BY_TYPE':
      return {
        ...state,
        type: action.payload,
      }
    default:
      return state
  }
}

export default filter
