import axios from 'axios'

export const setLoaded = payload => ({
  type: 'SET_AREAS_LOADED',
  payload,
})

export const setAreas = areas => ({
  type: 'SET_AREAS',
  payload: areas,
})

export const setActiveArea = id => ({
  type: 'SET_ACTIVE_AREA',
  payload: id,
})

export const fetchAreas = qualification => dispatch => {
  dispatch(setLoaded(false))

  axios
    .get(`/api/areas?qualification=${qualification}`)
    .then(({ data }) => dispatch(setAreas(data)))
}

export const fetchAreasWithTwoDiplomas = qualification => dispatch => {
  dispatch(setLoaded(false))

  axios
    .get(`/api/areas/two-diplomas?qualification=${qualification}`)
    .then(({ data }) => {
      dispatch(setAreas(data))
      // eslint-disable-next-line no-underscore-dangle
      dispatch(setActiveArea(data[0]._id))
    })
}

export const getAreasBySubject = subjectsId => ({
  type: 'GET_AREAS_BY_SUBJECTS',
  payload: subjectsId,
})
