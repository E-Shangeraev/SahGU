/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Switch from '@components/Switch/Switch'
import Area from '@components/Area/Area'
import Institute from '@components/Institute/Institute'
import { setFilterByType } from '@redux/actions/filter'
import { fetchAreas } from '@redux/actions/areas'
import { fetchInstitutes } from '@redux/actions/institutes'
import './InstitutesAndAreas.scss'

// qualificationIndex = 0 — Бакалавриат
// qualificationIndex = 1 — Магистратура

const InstitutesAndAreas = ({ qualificationIndex }) => {
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
    dispatch(fetchAreas(qualificationIndex))
    dispatch(fetchInstitutes(qualificationIndex))
  }, [])

  return (
    <section className="institutes-and-areas" id={2}>
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
            {instituteItems.map(({ name, social, areas }) => (
              <Institute
                key={uuidv4()}
                name={name}
                social={social}
                areas={areas}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

InstitutesAndAreas.propTypes = {
  qualificationIndex: PropTypes.number.isRequired,
}

export default InstitutesAndAreas
