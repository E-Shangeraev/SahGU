import axios from 'axios'

export const setLoaded = payload => ({
  type: 'SET_AREAS_LOADED',
  payload,
})

export const setAreas = areas => ({
  type: 'SET_AREAS',
  payload: areas,
})

export const fetchAreas = qualification => dispatch => {
  dispatch(setLoaded(false))

  axios
    .get(`http://localhost:3001/areas?qualification=${qualification}`)
    .then(({ data }) => dispatch(setAreas(data)))
}

export const getAreasBySubject = subjectsId => ({
  type: 'GET_AREAS_BY_SUBJECTS',
  payload: subjectsId,
})
