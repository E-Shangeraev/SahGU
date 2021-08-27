import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Modal from '@components/Modal/Modal'
import AreaBlock from '@components/AreaBlock/AreaBlock'
import './Area.scss'

const year = new Date().getFullYear() - 1

const Area = ({ item }) => {
  const { name, twoDiplomas, budget, paid } = item

  const getWordEnding = (num, word) => {
    if (num) {
      const str = num.toString()
      if (str.match(/[11-20]$/g)) {
        return word
      }
      if (str.match(/1$/g)) {
        return word
          .replace('й', 'е')
          .replace('ых', 'ое')
          .replace('мест', 'место')
      }
      if (str.match(/[2-4]$/g)) {
        return word.replace('й', 'я').replace('мест', 'места')
      }
    }
    return word
  }

  return (
    <li className="area">
      {name && <span className="area__name">{name}</span>}
      {twoDiplomas ? (
        <Link to="/two-diplomas" target="_blank" className="bage">
          Программа «Два Диплома»
        </Link>
      ) : null}
      <ul className="area__count">
        {budget && (
          <li key={uuidv4()}>
            <span>{budget.count ? budget.count : '—'}</span>
            <span>{getWordEnding(budget.count, 'бюджетных мест')}</span>
          </li>
        )}
        {paid && (
          <li>
            <span>{paid.count ? paid.count : '—'}</span>
            <span>{getWordEnding(paid.count, 'платных мест')}</span>
          </li>
        )}
        {budget && (
          <li>
            <span>{budget.score ? budget.score : '—'}</span>
            <span>проходной балл</span>
            <span>за {year} год</span>
          </li>
        )}
      </ul>
      <Modal btnText="Подробнее" btnColor="yellow">
        <AreaBlock item={item} year={year} />
      </Modal>
    </li>
  )
}

Area.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Area
