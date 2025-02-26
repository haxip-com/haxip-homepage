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
            <p>Downtown Toronto</p>
            <p>Ontario, Canada</p>
          </div>

          <div className={styles.contactCard}>
            <h2>Contact Information</h2>
            <p>Email: info@haxip.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send a Message</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>

        <div className={styles.backLink}>
          <Link href="/">Back to Home</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Haxip. All rights reserved.</p>
      </footer>
    </div>
  )
} 