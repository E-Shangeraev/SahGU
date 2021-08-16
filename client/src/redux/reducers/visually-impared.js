const initialState = {
  on: false,
}

const visuallyImpared = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VI':
      return {
        on: action.payload,
      }
    default:
      return state
  }
}

export default visuallyImpared
