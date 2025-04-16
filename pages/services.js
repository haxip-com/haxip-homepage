import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Services() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Services - Haxip</title>
        <meta name="description" content="Services provided by Haxip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Our Services</h1>

        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <h2>Software Development</h2>
            <p>We provide custom software development solutions for businesses and startups, including web applications, mobile apps, and enterprise software.</p>
          </div>

          <div className={styles.serviceCard}>
            <h2>Consulting Services</h2>
            <p>Our team of experts provides technical consulting to help you develop the best technology strategies and solutions.</p>
          </div>

          <div className={styles.serviceCard}>
            <h2>AI Application Development</h2>
            <p>We specialize in developing advanced AI applications that help businesses automate processes, gain insights, and optimize operations.</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Haxip. All rights reserved.</p>
      </footer>
    </div>
  )
} 