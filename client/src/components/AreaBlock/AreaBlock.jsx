import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './AreaBlock.scss'

const AreaBlock = React.memo(({ item }) => {
  const { name, code, twoDiplomas, budget, paid, profile, exams, activities } =
    item

  return (
    <div className="area-block">
      <h3 className="area__name">{name}</h3>
      {twoDiplomas ? <span className="bage">Программа «2 диплома»</span> : null}
      <div className="area-block__profile">
        <ul className="area-block__list">
          {profile.map((profileName, index) => (
            <li key={uuidv4()}>
              Профиль {index + 1}: {profileName}
            </li>
          ))}
        </ul>
        <h4 className="area-block__subtitle">Вступительные испытания</h4>
        <ul className="area-block__list">
          {exams.map(exam => (
            <li key={uuidv4()}>
              {exam.alternative
                ? `${exam.main.name} (${exam.mainScore}) /
                ${exam.alternative.name} (${exam.alternativeScore})`
                : `${exam.main.name} (${exam.mainScore})`}
            </li>
          ))}
        </ul>
        <h4 className="area-block__subtitle">
          Виды профессиональной деятельности
        </h4>
        <p className="text area-block__text">{activities.join(', ')}</p>
        <ul className="area__count">
          <li>
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
        <Modal btnText="Хочу поступить сюда" btnColor="yellow">
          <ConsultationBlock
            areaName={name}
            areaCode={code}
            title="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
          />
        </Modal>
      </div>
    </div>
  )
})

AreaBlock.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default AreaBlock
