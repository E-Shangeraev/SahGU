import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'

const scrollWithOffset = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  const yOffset = -80
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
}

const HashLink = ({ to, children, className }) => (
  <NavHashLink
    className={className}
    to={to}
    scroll={el => scrollWithOffset(el)}>
    {children}
  </NavHashLink>
)

HashLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

HashLink.defaultProps = {
  className: null,
}

export default HashLink
