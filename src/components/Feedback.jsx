/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

const Feedback = ({ title, text }) => (
  <section className="feedback">
    <div className="wrapper">
      <form className="feedback__form">
        <div className="feedback__container">
          <div className="feedback__left">
            <h2 className="title feedback__title">{title}</h2>
            <p>
              {text}
              <br />
              <br />
              Либо, вы можете позвонить нам самостоятельно по номеру:
              <br />
              <a className="feedback__phone" href="tel:8 (4242) 45−03−00">
                8 (4242) 45−03−00
              </a>
            </p>
          </div>
          <div className="feedback__right">
            <label htmlFor="name">Имя</label>
            <input type="name" id="name" placeholder="Иванов Иван Иванович" />
            <label htmlFor="phone">Телефон</label>
            <input type="phone" id="phone" placeholder="+7 999 999 99 99" />
            <label htmlFor="text">Комментарий</label>
            <textarea id="text" placeholder="Хочу поступить" resize="none" />
            <Button color="yellow">Отправить</Button>
            <div className="feedback__agreement">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Я даю своё{' '}
                <span>согласие на обработку персональных данных</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feedback;
