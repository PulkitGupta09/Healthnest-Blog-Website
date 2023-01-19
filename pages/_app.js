import '@/styles/globals.css'
import styles from '@/styles/main.module.scss'

export default function App({ Component, pageProps }) {
  return <>
    <header className={styles.mainnav}>
        <div className={styles.logo}>
          Healthnest
        </div>
        <ul className={styles.list}>
          <li className={styles.list__item}>Home</li>
          <li className={styles.list__item}>About</li>
          <li className={styles.list__item}>Shop</li>
          <li className={styles.list__item}>Blog</li>
          <li className={styles.list__item}>Contact</li>
        </ul>
    </header>
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
                Healthline Insider Newsletter
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
              &#169;2005-2022 Healthline Media a Red Ventures Company. 
        </p>
        <p className={styles.footer__column3_text2}>
              All rights reserved. Our website services, content, and products are for informational purposes only. Healthline Media does not provide     
              medical advice, diagnosis, or treatment. See additional information.
        </p>
        </div>
      </footer>
  </>
}
