import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { setActiveSubjects, removeActiveSubject } from '@redux/actions/subjects'
import './Subject.scss'

const Subjects = React.memo(({ id, name }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const handleSubjectClick = () => setActive(!active)

  useEffect(() => {
    if (active) {
      dispatch(setActiveSubjects(id))
    } else {
      dispatch(removeActiveSubject(id))
    }
  }, [active])

  return (
    <li>
      <button
        type="button"
        className={classNames('subject', { active })}
        id={id}
        onClick={handleSubjectClick}>
        {name}
      </button>
    </li>
  )
})

Subjects.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Subjects
