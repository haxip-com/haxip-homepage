import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Haxip</Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link href="/services" className={router.pathname === '/services' ? styles.active : ''}>
          Services
        </Link>
        <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>
          About
        </Link>
        <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>
          Contact
        </Link>
      </div>
    </nav>
  )
} 