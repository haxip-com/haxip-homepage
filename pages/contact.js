import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Haxip</title>
        <meta name="description" content="Contact Haxip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <h2>Company Address</h2>
            <p>1018 Kangding Rd</p>
            <p>Shanghai, China</p>
          </div>

          <div className={styles.contactCard}>
            <h2>Contact Information</h2>
            <p>Email: zhanh394@mcmaster.ca</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;me@mirza.im</p>
            <p>Phone: +1 (437) 663-7918</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Haxip. All rights reserved.</p>
      </footer>
    </div>
  )
} 
