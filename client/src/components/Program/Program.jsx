/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Modal from '@components/Modal/Modal'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import { fetchAreasWithTwoDiplomas, setActiveArea } from '@redux/actions/areas'
import './Program.scss'
import checkMark from '@assets/img/check-mark.svg'
import program from '@assets/img/program.jpg'

const Program = React.memo(() => {
  const dispatch = useDispatch()
  const {
    items: areaItems,
    activeAreas: activeArea,
    isLoaded: areasLoaded,
  } = useSelector(({ areas }) => areas)
  const [bachelors, setBachelors] = useState()
  const [magistracy, setMagistracy] = useState()
  const [activeQualification, setActiveQualification] = useState(0)
  const programDescriptionRef = useRef()

  const onSelectQualification = e => {
    setActiveQualification(+e.target.value)
    e.target.classList.toggle('active')
  }

  const onSelectArea = e => {
    dispatch(setActiveArea(e.target.id))
    if (window.innerWidth <= 1024 && programDescriptionRef) {
      const element = programDescriptionRef.current
      const headerHeight = 100
      window.scrollTo(
        0,
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight,
      )
    }
  }

  useEffect(() => {
    dispatch(fetchAreasWithTwoDiplomas())
  }, [])

  useEffect(() => {
    if (areaItems) {
      const bachelorItems = areaItems.filter(item => item.qualification['0'])
      setBachelors(bachelorItems)
      const magistracyItems = areaItems.filter(item => item.qualification['1'])
      setMagistracy(magistracyItems)
    }
  }, [areaItems])

  return (
    <section className="program" id={2}>
      <div className="wrapper">
        <h2 className="title program__title">
          Специальности, которые <span>участвуют в программе</span>
        </h2>
        <div className="program__container">
          <div className="program__filter">
            <div>
              <button
                type="button"
                className={classNames('subtitle', {
                  active: activeQualification === 0,
                })}
                value={0}
                onClick={onSelectQualification}>
                Бакалавриат
              </button>
              <ul>
                {areasLoaded &&
                  bachelors &&
                  bachelors.map(item => (
                    <li key={uuidv4()}>
                      <button
                        type="button"
                        id={item._id}
                        className={classNames({
                          active: activeArea._id === item._id,
                        })}
                        onClick={onSelectArea}>
                        {item.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <button
                type="button"
                className={classNames('subtitle', {
                  active: activeQualification === 1,
                })}
                value={1}
                onClick={onSelectQualification}>
                Магистратура
              </button>
              <ul>
                {areasLoaded &&
                  magistracy &&
                  magistracy.map(item => (
                    <li key={uuidv4()}>
                      <button
                        type="button"
                        id={item._id}
                        className={classNames({
                          active: activeArea._id === item._id,
                        })}
                        onClick={onSelectArea}>
                        {item.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {areasLoaded && (
            <div className="program__description" ref={programDescriptionRef}>
              <h3 className="subtitle">{activeArea.name}</h3>
              <p className="text program__text">{activeArea.description}</p>
              {activeArea.features && (
                <ul className="program__features">
                  {activeArea.features.map(item => (
                    <li key={uuidv4()}>
                      <img src={checkMark} alt="Галочка" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <img
                className="program__photo"
                src={program}
                alt="Фотография с занятия"
              />
              <p className="text program__text">{activeArea.more}</p>
              <Modal btnText="Получить консультацию" btnColor="purple">
                <ConsultationBlock
                  areaName={activeArea.name}
                  title="Получить консультацию"
                  text="Оставьте свои контактные данные
                        и мы свяжемся с вами в ближайшее время"
                />
              </Modal>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

export default Program
