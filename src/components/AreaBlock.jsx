import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import ConsultationBlock from './ConsultationBlock'

const AreaBlock = ({ name, twoDiplomas, count }) => (
  <div className="area__block">
    <span className="area__name">{name}</span>
    {twoDiplomas ? <span className="bage">Программа «2 диплома»</span> : null}
    <ul className="area__profiles">
      <li className="profile">
        <span className="profile__name">
          Профиль 1: «Начальное образование»
        </span>
        <h3 className="profile__entry">Всступительные испытания</h3>
        <ul className="profile__entry-list">
          <li>Обществознание (45);</li>
          <li>русский язык (40);</li>
          <li>математика (профильная) / биология (39/39).</li>
        </ul>
        <h3 className="profile__activities">
          Виды профессиональной деятельности
        </h3>
        <p className="text profile__text">
          Педагогическая, проектная, культурно-просветительская,
          исследовательская.
        </p>
        <ul className="area__count">
          <li>
            <span>{count[0]}</span>
            <span>бюджетных мест</span>
          </li>
          <li>
            <span>{count[1]}</span>
            <span>платных мест</span>
          </li>
          <li>
            <span>{count[2]}</span>
            <span>проходной балл</span>
          </li>
        </ul>
        <Modal btnText="Хочу поступить сюда" btnColor="yellow">
          <ConsultationBlock
            title="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
          />
        </Modal>
      </li>
      <li className="profile">
        <span className="profile__name">Профиль 2: «Физическая культура»</span>
        <h3 className="profile__entry">Всступительные испытания</h3>
        <ul className="profile__entry-list">
          <li>Профессиональное испытание (30);</li>
          <li>Обществознание (45);</li>
          <li>Русский язык (40).</li>
        </ul>
        <h3 className="profile__activities">
          Виды профессиональной деятельности
        </h3>
        <p className="text profile__text">
          Педагогическая, проектная, культурно-просветительская,
          исследовательская.
        </p>
        <ul className="area__count">
          <li>
            <span>{count[0]}</span>
            <span>бюджетных мест</span>
          </li>
          <li>
            <span>{count[1]}</span>
            <span>платных мест</span>
          </li>
          <li>
            <span>{count[2]}</span>
            <span>проходной балл</span>
          </li>
        </ul>
        <Modal btnText="Хочу поступить сюда" btnColor="yellow">
          <ConsultationBlock
            title="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
          />
        </Modal>
      </li>
    </ul>
  </div>
)

AreaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  twoDiplomas: PropTypes.bool.isRequired,
  count: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default AreaBlock
