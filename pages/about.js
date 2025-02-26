import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Haxip</title>
        <meta name="description" content="About Haxip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Haxip</h1>

        <div className={styles.aboutContent}>
          <p>
            Haxip is a technology company based in Toronto, dedicated to providing high-quality software development, consulting, and AI application development services.
            Our team consists of experienced software engineers, designers, and project managers who are passionate about using the latest technologies to solve complex business problems.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to help businesses achieve digital transformation through innovative technology solutions, improving efficiency and competitiveness.
          </p>

          <h2>Our Vision</h2>
          <p>
            We strive to become a leading software development and AI solutions provider in North America, known for our expertise and excellent service.
          </p>
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