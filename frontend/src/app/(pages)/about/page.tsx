import React from 'react'
import { Metadata } from 'next'
import { About } from '@/components/layouts'
import { ABOUT } from '@/lib/constants'
import AnimatedContent from '@/components/ui/AnimatedContent'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'About - Jordi Paradelo',
  description: 'Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.',
  openGraph: {
    title: 'About - Jordi Paradelo',
    description: 'Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.',
  },
}

const AboutPage = () => {
  return (
    <main className={styles['about-page']}>
      <About />
      <section className="padding-global">
        <div className="container">
          <AnimatedContent className={styles['about-page__content']}>
            <h1>{ABOUT.title}</h1>
            <p>{ABOUT.description}</p>
            <div className={styles['about-page__contact']}>
              {ABOUT.contact.map((item) => (
                <a key={item.id} {...item.props}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className={styles['about-page__business']}>
              <h2>Business Information</h2>
              <p>{ABOUT.business.name}</p>
              <p>VAT ID: {ABOUT.business.vatId}</p>
              <p>{ABOUT.business.location}</p>
            </div>
            <div className={styles['about-page__socials']}>
              {ABOUT.socials.map((social) => (
                <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.title}
                </a>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>
    </main>
  )
}

export default AboutPage