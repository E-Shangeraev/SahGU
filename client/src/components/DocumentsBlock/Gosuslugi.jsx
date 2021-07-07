import React from 'react'

const url =
  // eslint-disable-next-line max-len
  'https://vk.com/away.php?to=https%3A%2F%2Fwww.gosuslugi.ru%2F10077%2F1%2Fform%3Futm_source%3Dls%26utm_medium%3Dbutton%26utm_campaign%3Dvuz%26utm_content%3D10077'

const Gosuslugi = () => (
  <div className="documents-block documents-block--gosuslugi">
    <h3 className="documents-block__title">
      Через личный кабинет на Госуслугах
    </h3>
    <p className="documents-block__text">
      Зайти на сайт{' '}
      <a href={url} target="_blank" rel="noreferrer">
        www.gosuslugi.ru
      </a>{' '}
      Зарегистрироваться на портале или войти в личный кабинет, если регистрация
      уже есть. Аккаунт на портале должен быть подтвержденным.
    </p>
    <p className="documents-block__text">
      Далее либо на главной странице нажать на &quot;Поступайте в вуз
      онлайн&quot; и следовать подсказкам, или нажать на строчку &quot;Жизненные
      ситуации&quot;, &quot;Все услуги&quot;, &quot;Образование&quot;,
      &quot;Подача заявления на поступление в вуз&quot;.
    </p>
    <p className="documents-block__text">
      Заполнить заявление на поступление, следуя подсказкам системы.
    </p>
    <p className="documents-block__text">Отправить заявление.</p>
  </div>
)

export default Gosuslugi
