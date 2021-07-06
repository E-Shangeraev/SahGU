import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss'

const Switch = ({ options, onChange }) => {
  const { name, first, second } = options

  const handleChange = e => onChange(+e.target.value)

  return (
    <div className="switch">
      <input
        type="radio"
        id={`${name}-1`}
        name={name}
        value={first.value}
        className="switch__radio"
        onChange={handleChange}
      />
      <label htmlFor={`${name}-1`} className="switch__label">
        {first.label}
      </label>
      <input
        type="radio"
        id={`${name}-2`}
        name={name}
        value={second.value}
        className="switch__radio"
        onChange={handleChange}
        defaultChecked
      />
      <label htmlFor={`${name}-2`} className="switch__label">
        {second.label}
      </label>
    </div>
  )
}

Switch.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)])
  ).isRequired,
  onChange: PropTypes.func,
}

Switch.defaultProps = {
  onChange: null,
}

export default Switch
