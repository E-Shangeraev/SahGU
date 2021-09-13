/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'
import { Markup } from 'interweave'
import Button from '@components/Button/Button'
import './Slider.scss'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'

const Slider = () => {
  const sliderRef = useRef()
  const sliderContainerRef = useRef()
  const [slides, setSlides] = useState([])

  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    infinite: false,
    swipe: true,
  }

  useEffect(() => {
    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => setSlides(data))
  }, [])

  return (
    <div>
      <div className="slider" ref={sliderContainerRef}>
        <SlickSlider {...settings} ref={sliderRef}>
          {slides.length > 0 &&
            slides.map(item => (
              <div className="slide" key={item.name}>
                <div className="slide__top">
                  <img
                    src={`${AWS_URL}${item.uploadedFile.path}`}
                    alt={item.name}
                  />
                  <p>
                    <span className="slide__name">{item.name}</span>
                    <span>{item.subtitle}</span>
                  </p>
                </div>
                <div className="text slide__text">
                  <Markup content={item.text} />
                </div>
              </div>
            ))}
        </SlickSlider>
      </div>
      <div className="slider__buttons">
        <Button onClick={prev} outlined />
        <Button onClick={next} outlined />
      </div>
    </div>
  )
}

Slider.propTypes = {}

export default Slider
