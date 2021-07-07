import axios from 'axios'

export const setLoaded = payload => ({
  type: 'SET_SUBJECTS_LOADED',
  payload,
})

export const setSubjects = subjects => ({
  type: 'SET_SUBJECTS',
  payload: subjects,
})

export const setActiveSubjects = activeSubjectsId => ({
  type: 'SET_ACTIVE_SUBJECTS',
  payload: activeSubjectsId,
})

export const removeActiveSubject = activeSubjectId => ({
  type: 'REMOVE_ACTIVE_SUBJECTS',
  payload: activeSubjectId,
})

export const fetchSubjects = () => dispatch => {
  dispatch(setLoaded(false))

  axios
    .get('/api/subjects')
    .then(({ data }) => dispatch(setSubjects(data)))
    .catch(error => console.log(error))
}
