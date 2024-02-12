import React from 'react'
import './styles.scss'

const Hero = () => {
  return (
    <header className="hero" id="hero">
      <div className="container hero__container">
        <div className="hero__heading-wrapper">
          <p>Custom</p>
          <h1 className="hero__title">
            Design on Demand
          </h1>
        </div>
        <div className="hero__details">
          <h2>Launch your next project in <strong>no-time.</strong> </h2>
        </div>
      </div>
    </header>
  )
}

export default Hero