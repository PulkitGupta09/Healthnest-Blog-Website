import '@/styles/globals.css'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'
import Script from 'next/script'
import { useRef,useState } from 'react'

export default function App({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);


  return <>
    <header className={styles.mainnav}>
        <div className={styles.logo}>
          Healthnest 
        </div>
        <ul className={toggle ? `${styles.list} ${styles.list_active}` : `${styles.list}` } >
         <Link href="/" className={styles.list__item}><li>Home</li></Link>
         <Link href="/about" className={styles.list__item}><li>About</li></Link> 
         <Link href="/blog" className={styles.list__item}><li>Blog</li></Link>
         <Link href="/contact" className={styles.list__item}><li>Contact</li></Link>
        </ul>
    </header>
    <div className={styles.hamburger} onClick = {()=>{setToggle(!toggle)}}>
        {/* <div className={toggle ? `${styles.div} ${styles.line1c}` : `${styles.div}`}></div>
        <div className={toggle ? `${styles.div} ${styles.line2c}` : `${styles.div}`}></div>
        <div className= {toggle ? `${styles.div} ${styles.line3c}` : `${styles.div}`}></div> */}
        <div className={toggle ? `${styles.line1c}` : `${styles.div}`}></div>
        <div className={toggle ? `${styles.line2c}` : `${styles.div}`}></div>
        <div className= {toggle ? `${styles.line3c}` : `${styles.div}`}></div>
    </div>
   <Component {...pageProps} />
   <footer className={styles.footer}>
        <div className={styles.footer__logo}>
            Healthnest
        </div>
        <div className={styles.footer__column1}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>
                Partner
            </li>
            <li className={styles.footer__list_item}>
                Company
            </li>
            <li className={styles.footer__list_item}>
                Insights
            </li>
            <li className={styles.footer__list_item}>
                News
            </li>
            <li className={styles.footer__list_item}>
                Commitment
            </li>
          </ul>
        </div>
        <div className={styles.footer__column2}>
          <ul className={styles.footer__list}>
          <li className={styles.footer__list_item}>
                Advertise With Us
            </li>
            <li className={styles.footer__list_item}>
                International
            </li>
            <li className={styles.footer__list_item}>
                Healthnest Insider Newsletter
            </li>
            <li className={styles.footer__list_item}>
                Careers
            </li>
            <li className={styles.footer__list_item}>
                Contact Us
            </li>
          </ul>
        </div>
        <div className={styles.footer__column3}>
        <p className={styles.footer__column3_text1}>
              &#169;2005-2022 Healthnesst Media a Red Ventures Company. 
        </p>
        <p className={styles.footer__column3_text2}>
              All rights reserved. Our website services, content, and products are for informational purposes only. Healthline Media does not provide     
              medical advice, diagnosis, or treatment. See additional information.
        </p>
        </div>
      </footer>
  </>
}
