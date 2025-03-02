import React from 'react'
import styles from './styles.module.scss'

const AboutContent = () => {
  return (
    <div className={styles['about-content']}>
      <section className={styles['about-content__section']}>
        <h2 className={styles['about-content__heading']}>Experience</h2>
        <div className={styles['about-content__experience']}>
          <div className={styles['experience-item']}>
            <h3>Senior Frontend Developer</h3>
            <p>2020 - Present</p>
            <p>Leading the development of web applications using React, Next.js, and TypeScript.</p>
          </div>
          {/* Add more experience items */}
        </div>
      </section>

      <section className={styles['about-content__section']}>
        <h2 className={styles['about-content__heading']}>Skills</h2>
        <div className={styles['about-content__skills']}>
          <div className={styles['skills-group']}>
            <h3>Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>GSAP / Framer Motion</li>
            </ul>
          </div>
          {/* Add more skill groups */}
        </div>
      </section>

      <section className={styles['about-content__section']}>
        <h2 className={styles['about-content__heading']}>Education</h2>
        <div className={styles['about-content__education']}>
          <div className={styles['education-item']}>
            <h3>Computer Science Degree</h3>
            <p>2015 - 2019</p>
            <p>University of Barcelona</p>
          </div>
          {/* Add more education items */}
        </div>
      </section>
    </div>
  )
}

export default AboutContent