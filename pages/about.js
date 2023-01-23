import React from 'react'
import styles from "@/styles/main.module.scss";
const About = () => {
  return (
    <div className={styles.aboutform}>
    <div className={styles.aboutform__first}>
      <div className={styles.aboutform__first_headingprimary}>
        About Us
      </div>
      <h2 className={styles.aboutform__first_headingsecondary}>Your Trusted Source for Reliable Health Information</h2>
      <p className={styles.aboutform__first_paragraph}>We are a team of dedicated healthcare professionals and wellness enthusiasts who are passionate about providing accurate and up-to-date health information to the public. Our goal is to empower individuals to take control of their health and make informed decisions about their well-being.</p>
      <div className={styles.aboutform__first_requestquote}>Request Quote: freequote@gmail.com</div>
      <button className={styles.aboutform_btn}>Contact Us</button>
    </div>
    <div className={styles.aboutform__second}>
      <div className={styles.aboutform__second_imgcontainer}>
        <img src="/img/about_md.jpg" width={192}
          height={128} alt="about_md" className={styles.aboutform__second_img}/>
      </div>
    </div>
  </div>
  )
}

export default About