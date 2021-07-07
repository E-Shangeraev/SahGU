import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import ym from 'react-yandex-metrika'
import Button from '@components/Button/Button'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/

const formId = uuidv4()

const ConsultationBlock = ({ title, text, areaName, areaCode }) => {
  const [submited, setSubmited] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Имя может содержать не менее 2 символов')
      .max(50, 'Имя может содержать не более 50 символов')
      .typeError('Имя может содержать только буквы')
      .required('Укажите имя'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Проверьте корректность введенного номера')
      .required('Укажите номер телефона'),
    agreement: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions is required'),
  })

  return (
    <div className="modal__block">
      {!submited ? (
        <>
          <h3 className="modal__title">{title}</h3>
          {text && <p className="text modal__text">{text}</p>}

          <Formik
            initialValues={{
              name: '',
              phone: '',
              agreement: false,
              areaName,
              areaCode,
            }}
            validateOnBlur
            onSubmit={(values, { resetForm }) => {
              fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              })
              resetForm()
              setSubmited(true)
              ym(82554970, 'reachGoal', 'click_zayavka')
            }}
            validationSchema={validationSchema}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form className="form modal__form">
                <label
                  htmlFor={`name-${formId}`}
                  className={dirty && !errors.name ? 'valid' : null}>
                  {touched.name && errors.name ? (
                    <p className="error">{errors.name}</p>
                  ) : (
                    'Ваше имя*'
                  )}
                </label>
                <input
                  type="name"
                  name="name"
                  id={`name-${formId}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Иванов Иван Иванович"
                />
                <label
                  htmlFor={`phone-${formId}`}
                  className={dirty && !errors.phone ? 'valid' : null}>
                  {touched.phone && errors.phone ? (
                    <p className="error">{errors.phone}</p>
                  ) : (
                    'Телефон*'
                  )}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id={`phone-${formId}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="+7 999 999 99 99"
                />
                <Button
                  type="submit"
                  color="yellow"
                  onClick={handleSubmit}
                  disabled={!isValid && !dirty}>
                  Отправить
                </Button>
                <div className="form__agreement">
                  <Field
                    type="checkbox"
                    id={`checkbox-${formId}`}
                    name="agreement"
                  />
                  <label
                    htmlFor={`checkbox-${formId}`}
                    className={
                      errors.agreement && touched.agreement ? 'error' : null
                    }>
                    Я даю своё{' '}
                    <span>согласие на обработку персональных данных</span>
                  </label>
                </div>
              </form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <h3 className="modal__title">Спасибо за заявку!</h3>
          <p className="text modal__text">
            Мы свяжемся с вами в ближайшее время
          </p>
        </>
      )}
    </div>
  )
}

ConsultationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  areaName: PropTypes.string,
  areaCode: PropTypes.string,
}

ConsultationBlock.defaultProps = {
  text: null,
  areaName: null,
  areaCode: null,
}

export default ConsultationBlock
