/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import Button from '@components/Button/Button'
import './Feedback.scss'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/

const Feedback = ({ title, text, formId }) => {
  // const [submited, setSubmited] = useState(false)

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
    text: yup
      .string()
      .min(10, 'Оставьте небольшой комментарий')
      .required('Оставьте небольшой комментарий'),
    agreement: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions is required'),
  })

  return (
    <section className="feedback">
      <div className="wrapper">
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
          <Formik
            initialValues={{
              name: '',
              phone: '',
              text: '',
              agreement: false,
            }}
            validateOnBlur
            onSubmit={async (values, { resetForm }) => {
              fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(values),
              })
              resetForm()
              // setSubmited(true)
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
              <form className="form feedback__form">
                <label
                  htmlFor={`name-${formId}`}
                  className={dirty && !errors.name ? 'valid' : null}>
                  {touched.name && errors.name ? (
                    <p className="error">{errors.name}</p>
                  ) : (
                    'Имя'
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
                    'Телефон'
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
                <label
                  htmlFor={`text-${formId}`}
                  className={dirty && !errors.text ? 'valid' : null}>
                  {touched.text && errors.text ? (
                    <p className="error">{errors.text}</p>
                  ) : (
                    'Комментарий'
                  )}
                </label>
                <textarea
                  id={`text-${formId}`}
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  placeholder="Хочу поступить"
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
        </div>
      </div>
    </section>
  )
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
}

export default Feedback
