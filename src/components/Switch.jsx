import React from 'react'
import PropTypes from 'prop-types'

const Switch = ({ options }) => {
  const { name, firstValue, secondValue } = options

  return (
    <div className="switch">
      <input
        type="radio"
        id={`${name}-1`}
        name={name}
        value={firstValue}
        className="switch__radio"
      />
      <label htmlFor={`${name}-1`} className="switch__label">
        {firstValue}
      </label>
      <input
        type="radio"
        id={`${name}-2`}
        name={name}
        value={secondValue}
        className="switch__radio"
        defaultChecked
      />
      <label htmlFor={`${name}-2`} className="switch__label">
        {secondValue}
      </label>
    </div>
  )
}

Switch.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Switch
