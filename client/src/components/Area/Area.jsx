import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Modal from '@components/Modal/Modal'
import AreaBlock from '@components/AreaBlock/AreaBlock'
import './Area.scss'

const Area = ({ item }) => {
  const { name, twoDiplomas, budget, paid } = item

  return (
    <li className="area">
      <span className="area__name">{name}</span>
      {twoDiplomas ? <span className="bage">Программа «2 диплома»</span> : null}
      <ul className="area__count">
        <li key={uuidv4()}>
          <span>{budget.count}</span>
          <span>бюджетных мест</span>
        </li>
        <li>
          <span>{paid.count}</span>
          <span>платных мест</span>
        </li>
        <li>
          <span>{budget.score}</span>
          <span>проходной балл</span>
        </li>
      </ul>
      <Modal btnText="Подробнее" btnColor="yellow">
        <AreaBlock item={item} />
      </Modal>
    </li>
  )
}

Area.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Area