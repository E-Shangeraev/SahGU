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
    dispatch(fetchAreasWithTwoDiplomas())
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
                          active: activeArea === item._id,
                        })}
                        onClick={onSelectArea}>
                        {item.profile}
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
          <div className="program__description">
            <h3 className="subtitle">Педагогическое образование</h3>
            <p className="text program__text">
              Педагогическое образование — это направление подготовки
              преподавателей общеобразовательных дисциплин в школе,
              дополнительного образования детей и работников смежных
              специальностей.
            </p>
            <ul className="program__features">
              <li>
                <img src={checkMark} alt="Галочка" />
                <span>20 факультетов</span>
              </li>
              <li>
                <img src={checkMark} alt="Галочка" />
                <span>200 программ</span>
              </li>
              <li>
                <img src={checkMark} alt="Галочка" />
                <span>Отсрочка от армии</span>
              </li>
              <li>
                <img src={checkMark} alt="Галочка" />
                <span>Трудоустройство студентов</span>
              </li>
            </ul>
            <img
              className="program__photo"
              src={program}
              alt="Фотография с занятия"
            />
            <p className="text program__text">
              Педагогическое образование — это направление подготовки
              преподавателей общеобразовательных дисциплин в школе,
              дополнительного образования детей и работников смежных
              специальностей. Педагогическое образование — это направление
              подготовки преподавателей общеобразовательных дисциплин в школе,
              дополнительного образования детей и работников смежных
              специальностей.
            </p>
            <Modal btnText="Получить консультацию" btnColor="purple">
              <ConsultationBlock
                title="Получить консультацию"
                text="Оставьте свои контактные данные
                        и мы свяжемся с вами в ближайшее время"
              />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Program
