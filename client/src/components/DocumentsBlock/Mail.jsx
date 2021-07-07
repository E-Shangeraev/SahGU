import React from 'react'

const Mail = () => (
  <div className="documents-block documents-block--post">
    <h3 className="documents-block__title">По электронной почте</h3>
    <p className="documents-block__text">
      Скачать с{' '}
      <a
        // eslint-disable-next-line max-len
        href="https://vk.com/away.php?utf=1&to=http%3A%2F%2Fsakhgu.ru%2Fabitur%2Fbakalavriat%2F"
        target="_blank"
        rel="noreferrer">
        сайта
      </a>{' '}
      бланк заявления на поступление и заявление о согласии на обработку
      персональных данных. Заполнить их.
    </p>
    <span>Отсканировать или сфотографировать остальные документы:</span>
    <ul className="documents-block__list">
      <li>
        паспорт (страницы, где находится фото, прописка и страница со сведениями
        о ранее выданных паспортах),
      </li>
      <li>документ об образовании (аттестат или диплом с приложением),</li>
      <li>СНИЛС (при наличии),</li>
      <li>льготные документы (при наличии),</li>
      <li>
        документы, подтверждающие индивидуальные достижения (при наличии).
      </li>
    </ul>
    <p className="documents-block__text">
      Отсканированные документы прислать на адрес{' '}
      <a href="mailto:pk@sakhgu.ru">pk@sakhgu.ru</a>.
    </p>
  </div>
)

export default Mail
