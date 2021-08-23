import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'
import Modal from '@components/Modal/Modal'
import AreaBlock from '@components/AreaBlock/AreaBlock'
import instagramIcon from '@assets/img/icons/instagram-purple.svg'
import './Institute.scss'

const year = new Date().getFullYear() - 1

const Institute = ({ name, social, areas }) => {
  const [open, setOpen] = useState(false)
  const [instHeihgt, setInstHeight] = useState()
  const instituteRef = useRef()
  const instituteContainerRef = useRef()
  const instituteAreaRef = useRef()

  const getPaidCount = () => {
    const result = areas.reduce(
      (acc, cur) => (cur.paid ? acc + cur.paid.count : acc + 0),
      0,
    )
    return result === 0 ? '—' : result
  }

  const getBudgetCount = () => {
    const result = areas.reduce(
      (acc, cur) => (cur.budget ? acc + cur.budget.count : acc + 0),
      0,
    )
    return result === 0 ? '—' : result
  }

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
    if (areas && areas.length) {
      setInstHeight(instituteRef.current.clientHeight)

      if (open) {
        instituteRef.current.style.height = `
        ${instHeihgt}px`

        instituteContainerRef.current.style.height =
          instituteAreaRef.current.scrollHeight < 400
            ? `
        ${
          instituteAreaRef.current.scrollHeight +
          instituteRef.current.clientHeight
        }px`
            : `${instituteRef.current.clientHeight + 400}px`
      } else {
        instituteContainerRef.current.style.height = ''
      }
    }
  }, [open])

  if (areas && areas.length) {
    return (
      <li
        className={classNames('institute', { active: open })}
        ref={instituteRef}>
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
                })}
                ref={instituteAreaRef}>
                {areas.map(area => (
                  <li key={uuidv4()}>
                    <Modal btnText={area.name} btnColor="yellow">
                      <AreaBlock item={area} year={year} />
                    </Modal>
                  </li>
                ))}
              </ul>
              <div>
                <button
                  type="button"
                  className={classNames('institute__button', {
                    active: open,
                  })}
                  onClick={handleButtonToggle}>
                  Направления
                </button>
                {social && (
                  <a
                    href={social}
                    target="_blank"
                    rel="noreferrer"
                    className="institute__social">
                    <span>Instagram</span>
                    <img src={instagramIcon} alt={social} />
                  </a>
                )}
              </div>
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
  social: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.object),
}

Institute.defaultProps = {
  social: null,
  areas: [],
}

export default Institute
