/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Switch from '@components/Switch/Switch'
import Area from '@components/Area/Area'
import Institute from '@components/Institute/Institute'
import { setFilterByType } from '@redux/actions/filter'
import { fetchAreas } from '@redux/actions/areas'
import { fetchInstitutes } from '@redux/actions/institutes'
import './InstitutesAndAreas.scss'

const qualification = 0 // Бакалавриат

const InstitutesAndAreas = () => {
  const dispatch = useDispatch()
  const { type } = useSelector(({ filter }) => filter)
  const { items: areaItems, isLoaded: areasLoaded } = useSelector(
    ({ areas }) => areas,
  )
  const { items: instituteItems, isLoaded: institutesLoaded } = useSelector(
    ({ institutes }) => institutes,
  )

  const onSelectType = useCallback(value => {
    dispatch(setFilterByType(value))
  }, [])

  useEffect(async () => {
    dispatch(fetchAreas(qualification))
    dispatch(fetchInstitutes(qualification))
  }, [])

  return (
    <section className="institutes-and-areas">
      <div className="wrapper">
        <h2 className="title institutes-and-areas__title">
          <span>Институты и направления</span>
          подготовки
        </h2>
        <p className="big-text institutes-and-areas__text">
          Вы можете ознакомиться со всеми институтами и направлениями обучения
          на 2021 год и посмотреть именно те, которые были бы интересны вам!
        </p>
        <div className="filter">
          <Switch
            options={{
              name: 'type',
              first: { label: 'Выбрать институт', value: 2 },
              second: { label: 'Все направления', value: 0 },
            }}
            onChange={onSelectType}
          />
        </div>
        {areasLoaded && type === 0 && (
          <ul className="filter__list">
            {areaItems.map(item => (
              <Area key={uuidv4()} item={item} />
            ))}
          </ul>
        )}
        {institutesLoaded && type === 2 && (
          <ul className="filter__list">
            {instituteItems.map(item => (
              <Institute key={uuidv4()} name={item.name} areas={item.areas} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default InstitutesAndAreas
