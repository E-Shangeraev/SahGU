/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import ScrollAnimation from 'react-animate-on-scroll'
import Switch from '@components/Switch/Switch'
import Subject from '@components/Subject/Subject'
import Area from '@components/Area/Area'
import {
  setFilterByQualification,
  setFilterByType,
} from '@redux/actions/filter'
import { fetchAreas, getAreasBySubject } from '@redux/actions/areas'
import { fetchSubjects } from '@redux/actions/subjects'
import './Areas.scss'

const Areas = () => {
  const dispatch = useDispatch()

  const { qualification, type } = useSelector(({ filter }) => filter)
  const {
    items: subjectsItems,
    active: activeSubjects,
    isLoaded: subjectsLoaded,
  } = useSelector(({ subjects }) => subjects)
  const {
    items: areaItems,
    activeAreas: activeAreaItems,
    isLoaded: areasLoaded,
  } = useSelector(({ areas }) => areas)

  const onSelectQualification = useCallback(value => {
    dispatch(setFilterByQualification(value))

    if (value === 1) {
      dispatch(setFilterByType(0))
    }
  }, [])

  const onSelectType = useCallback(value => {
    dispatch(setFilterByType(value))
  }, [])

  useEffect(() => {
    dispatch(fetchSubjects())
  }, [])

  useEffect(() => {
    dispatch(fetchAreas(qualification))
  }, [qualification])

  useEffect(() => {
    dispatch(getAreasBySubject(activeSubjects))
  }, [activeSubjects])

  return (
    <section className="areas" id="2">
      <div className="wrapper">
        <div className="areas__container">
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
            <h2 className="title areas__title">
              <span>Направления </span>подготовки
            </h2>
            <p className="big-text areas__text">
              Вы можете ознакомиться со всеми направлениями обучения на 2021
              год, выбрать предметы которые сдаёте и посмотреть именно те,
              которые были бы интересны вам!
            </p>
          </ScrollAnimation>
          <div className="areas__filters">
            <Switch
              options={{
                name: 'qualification',
                first: { label: 'Магистратура', value: 1 },
                second: { label: 'Бакалавр/Специалитет', value: 0 },
              }}
              onChange={onSelectQualification}
            />
            {qualification !== 1 ? (
              <>
                <Switch
                  options={{
                    name: 'type',
                    first: { label: 'Выбрать предметы', value: 1 },
                    second: { label: 'Все направления', value: 0 },
                  }}
                  onChange={onSelectType}
                />
                {subjectsLoaded && type === 1 ? (
                  <ul className="subjects">
                    {subjectsItems.map(item => (
                      <Subject key={item._id} name={item.name} id={item._id} />
                    ))}
                  </ul>
                ) : null}
              </>
            ) : null}
          </div>
          {areasLoaded && type === 0 && (
            <ul className="areas__list">
              {areaItems.map(item => (
                <Area key={uuidv4()} item={item} />
              ))}
            </ul>
          )}
          {areasLoaded && type === 1 && (
            <ul className="areas__list">
              {activeAreaItems.map(item => (
                <Area key={uuidv4()} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default Areas
