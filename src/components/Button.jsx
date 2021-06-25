import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ outlined, color, children }) => {
  return (
    <button
      type="button"
      className={classNames('button', {
        'button--outlined': outlined,
        'button--yellow': color === 'yellow',
        'button--purple': color === 'purple',
      })}>
      {children}
    </button>
  )
}

Button.propTypes = {
  outlined: PropTypes.bool,
}

Button.defaultProps = {
  outlined: false,
}

export default Button
