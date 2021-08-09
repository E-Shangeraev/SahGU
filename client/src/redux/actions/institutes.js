import axios from 'axios'

export const setLoaded = payload => ({
  type: 'SET_INSTITUTES_LOADED',
  payload,
})

export const setInstitutes = institutes => ({
  type: 'SET_INSTITUTES',
  payload: institutes,
})

export const fetchInstitutes = qualification => dispatch => {
  dispatch(setLoaded(false))

  axios
    .get(`/api/institutes?qualification=${qualification}`)
    .then(({ data }) => dispatch(setInstitutes(data)))
}
