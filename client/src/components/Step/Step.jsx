import React from 'react'
import PropTypes from 'prop-types'

const Step = ({ item }) => (
  <li className="step">
    <div className="step__number">01</div>
  </li>
)

Step.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Step
