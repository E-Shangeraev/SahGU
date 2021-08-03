/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Modal from '@components/Modal/Modal'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import { fetchAreasWithTwoDiplomas, setActiveArea } from '@redux/actions/areas'
import { setFilterByQualification } from '@redux/actions/filter'
import './Program.scss'
import checkMark from '@assets/img/check-mark.svg'
import program from '@assets/img/program.jpg'

const Program = React.memo(() => {
  const dispatch = useDispatch()
  const { qualification } = useSelector(({ filter }) => filter)
  const {
    items: areaItems,
    activeAreas: activeArea,
    isLoaded: areasLoaded,
  } = useSelector(({ areas }) => areas)

  const onSelectQualification = useCallback(e => {
    dispatch(setFilterByQualification(+e.target.value))
  }, [])

  const onSelectArea = e => dispatch(setActiveArea(e.target.id))

  useEffect(() => {
    dispatch(fetchAreasWithTwoDiplomas(qualification))
  }, [])

  return (
    <section className="program">
      <div className="wrapper">
        <h2 className="title program__title">
          Специальности, которые <span>участвуют в программе</span>
        </h2>
        <div className="program__container">
          <div className="program__filter">
            <div>
              <button
                type="button"
                className="subtitle"
                value={0}
                onClick={onSelectQualification}>
                Бакалавриат
              </button>
              <ul>
                {areasLoaded &&
                  areaItems.map(item => (
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
                className="subtitle"
                value={1}
                onClick={onSelectQualification}>
                Магистратура
              </button>
            </div>
          </div>
          {areasLoaded && (
            <div className="program__description">
              <h3 className="subtitle">{activeArea.name}</h3>
              <p className="text program__text">{activeArea.description}</p>
              {activeArea.features ? (
                <ul className="program__features">
                  {activeArea.features.map(item => (
                    <li key={uuidv4()}>
                      <img src={checkMark} alt="Галочка" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <img
                className="program__photo"
                src={program}
                alt="Фотография с занятия"
              />
              <p className="text program__text">{activeArea.more}</p>
              <Modal btnText="Получить консультацию" btnColor="purple">
                <ConsultationBlock
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
