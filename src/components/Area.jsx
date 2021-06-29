import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import AreaBlock from './AreaBlock'

const Area = ({ name, twoDiplomas, count }) => (
  <li className="area">
    <span className="area__name">{name}</span>
    {twoDiplomas ? <span className="bage">Программа «2 диплома»</span> : null}
    <ul className="area__count">
      <li>
        <span>{count[0]}</span>
        <span>бюджетных мест</span>
      </li>
      <li>
        <span>{count[1]}</span>
        <span>платных мест</span>
      </li>
      <li>
        <span>{count[2]}</span>
        <span>проходной балл</span>
      </li>
    </ul>
    <Modal btnText="Подробнее" btnColor="yellow">
      <AreaBlock name={name} twoDiplomas={twoDiplomas} count={count} />
    </Modal>
  </li>
)

Area.propTypes = {
  name: PropTypes.string.isRequired,
  twoDiplomas: PropTypes.bool.isRequired,
  count: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Area
