import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'
import './Institute.scss'

const Institute = ({ name, areas }) => {
  const [open, setOpen] = useState(false)
  const instituteRef = useRef()
  const instituteContainerRef = useRef()

  const getPaidCount = () =>
    areas.reduce((acc, cur) => (cur.paid ? acc + cur.paid.count : acc + 0), 0)

  const getBudgetCount = () =>
    areas.reduce(
      (acc, cur) => (cur.budget ? acc + cur.budget.count : acc + 0),
      0,
    )

  const handleButtonToggle = () => setOpen(!open)

  const getWordEnding = (num, word) => {
    const str = num.toString()
    if (str.match(/[11-20]$/g)) {
      return word
    }
    if (str.match(/1$/g)) {
      return word.replace('й', 'е').replace('ых', 'ое').replace('мест', 'место')
    }
    if (str.match(/[2-4]$/g)) {
      return word.replace('й', 'я').replace('мест', 'места')
    }
    return word
  }

  useEffect(() => {
    if (open) {
      instituteRef.current.style.minHeight = `
      ${instituteRef.current.clientHeight}px`
    }
  }, [open])

  if (areas.length) {
    return (
      <li className="institute" ref={instituteRef}>
        <Transition nodeRef={instituteContainerRef} in={open} timeout={500}>
          {state => (
            <div
              className={classNames('institute__container', state)}
              ref={instituteContainerRef}>
              {name && <span className="institute__name">{name}</span>}
              <ul className="institute__count">
                <li>
                  <span>{areas.length}</span>
                  <span>{getWordEnding(areas.length, 'направлений')}</span>
                </li>
                <li>
                  <span>{getBudgetCount()}</span>
                  <span>
                    {getWordEnding(getBudgetCount(), 'бюджетных мест')}
                  </span>
                </li>
                <li>
                  <span>{getPaidCount()}</span>
                  <span>{getWordEnding(getPaidCount(), 'платных мест')}</span>
                </li>
              </ul>
              <ul
                className={classNames('institute__areas', {
                  active: open,
                })}>
                {areas.map(area => (
                  <li key={uuidv4()}>{area.name}</li>
                ))}
              </ul>
              <button
                type="button"
                className={classNames('institute__button', {
                  active: open,
                })}
                onClick={handleButtonToggle}>
                Направления подготовки
              </button>
            </div>
          )}
        </Transition>
      </li>
    )
  }

  return null
}

Institute.propTypes = {
  name: PropTypes.string.isRequired,
  areas: PropTypes.arrayOf(PropTypes.object),
}

Institute.defaultProps = {
  areas: [],
}

export default Institute
