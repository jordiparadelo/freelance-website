import React from 'react'
import './styles.scss'

const Banner = () => {
  return (
    <section className='banner'>
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__worldwide">Working Worldwide</div>
                <div className="banner__location">Based on Spain</div>
                <div className="banner__availability">Available to Work</div>
            </div>
        </div>
    </section>
  )
}

export default Banner