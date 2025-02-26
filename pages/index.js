import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Haxip - Software Development & Consulting Experts</title>
        <meta name="description" content="Haxip provides software development, consulting, and AI application development services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Haxip</span>
        </h1>

        <p className={styles.description}>
          Your partner for software development, consulting, and AI application development
        </p>

        <div className={styles.grid}>
          <Link href="/services">
            <div className={styles.card}>
              <h2>Our Services &rarr;</h2>
              <p>Explore our software development, consulting, and AI application development services.</p>
            </div>
          </Link>

          <Link href="/about">
            <div className={styles.card}>
              <h2>About Us &rarr;</h2>
              <p>Learn about Haxip's mission, vision, and team.</p>
            </div>
          </Link>

          <Link href="/contact">
            <div className={styles.card}>
              <h2>Contact Us &rarr;</h2>
              <p>Located in Toronto, we're ready to help you.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Haxip. All rights reserved.</p>
      </footer>
    </div>
  )
} 