/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import Button from './Button';
import image1 from '../assets/img/Slider/1.jpg';
import arrowRight from '../assets/img/icons/arrow-right.svg';
import arrowLeft from '../assets/img/icons/arrow-left.svg';

const Slider = (props) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    vertical: true,
    afterChange: (index) => {
      console.log(index);
    },
  };

  return (
    <div className="slider">
      <SlickSlider {...settings} ref={sliderRef}>
        <div className="slide">
          <div className="slide__top">
            <img src={image1} alt="Лещенко Максим Олегович" />
            <p>
              <span className="slide__name">Лещенко Максим Олегович</span>
              <span>Окончил обучение в июле 2018 года.</span>
            </p>
          </div>
          <blockquote>
            Самое главное впечатление для меня было, в первый месяц после
            зачисления в студенты ТНИ, что я пришёл сюда не зря, потому что
            СахГУ на самом деле даёт все шансы и возможности для собственной
            реализации. Обучение в ТНИ открыло для меня двери в осуществлении
            своей юношеской мечты &quot;Стать настоящим профессионалом и
            экспертом в своё деле&quot;. Преподавательский состав, а в частности
            мой куратор Сторожева Мария Евгеньевна навсегда останутся в моём
            сердце, так как на протяжении целых 4 лет они вкладывали в меня свои
            знания и опыт, тратив на это много сил, я могу с полной уверенностью
            на данный момент сказать, что всё это было не зря. Урок от
            института, который я усвоил на всю жизнь, это главное &quot;не
            стоять на месте&quot;. Чем больше ты делаешь, тем больше у тебя
            получается.
          </blockquote>
        </div>
        <div className="slide">
          <div className="slide__top">
            <img src={image1} alt="Лещенко Максим Олегович" />
            <p>
              <span className="slide__name">Лещенко Максим Олегович</span>
              <span>Окончил обучение в июле 2018 года.</span>
            </p>
          </div>
          <blockquote>
            Самое главное впечатление для меня было, в первый месяц после
            зачисления в студенты ТНИ, что я пришёл сюда не зря, потому что
            СахГУ на самом деле даёт все шансы и возможности для собственной
            реализации. Обучение в ТНИ открыло для меня двери в осуществлении
            своей юношеской мечты &quot;Стать настоящим профессионалом и
            экспертом в своё деле&quot;. Преподавательский состав, а в частности
            мой куратор Сторожева Мария Евгеньевна навсегда останутся в моём
            сердце, так как на протяжении целых 4 лет они вкладывали в меня свои
            знания и опыт, тратив на это много сил, я могу с полной уверенностью
            на данный момент сказать, что всё это было не зря. Урок от
            института, который я усвоил на всю жизнь, это главное &quot;не
            стоять на месте&quot;. Чем больше ты делаешь, тем больше у тебя
            получается.
          </blockquote>
        </div>
      </SlickSlider>
      <div className="slider__buttons">
        <Button onClick={prev} outlined />
        <Button onClick={next} outlined />
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
