import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import './Checkbox.scss'

const Checkbox = ({ values }) => (
  <div className="checkbox">
    {values.map((val, index) => (
      <div key={uuidv4()}>
        <input
          type="checkbox"
          id={`checkbox-${index}`}
          name={val}
          value={val}
          className="checkbox__input"
        />
        <label htmlFor={`checkbox-${index}`} className="checkbox__label">
          {val}
        </label>
      </div>
    ))}
  </div>
)

Checkbox.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Checkbox
