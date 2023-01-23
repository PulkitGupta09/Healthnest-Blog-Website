import React from "react";
import styles from "@/styles/main.module.scss";
import { useState } from "react";
const contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const [address, setaddress] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(phone,name,email,address,desc);

    const data = {name,phone,email,desc,address};

    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert("Form has been submitted");
        setphone('')
        setemail('')
        setdesc('')
        setname('')
        setaddress('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleChange=(e)=>{
    if(e.target.name == 'phone'){
      setphone(e.target.value);
    }
    else if(e.target.name == 'name'){
      setname(e.target.value);
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value);
    }
    else if(e.target.name == 'address'){
      setaddress(e.target.value);
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value);
    }
    // console.log(e.target.value); 

    
  }
 
  return (
    <div className={styles.contactpage}>
    <div className={styles.contactpage__primaryheading}>Contact Us</div>
    <h2 className={styles.contactpage__secondheading}>Let's Get in Touch.</h2>
    <div className={styles.contactformandinfo}>
        <form method="post" action="sendemail.php" id="contact-form" className={styles.contactform} onSubmit={handleSubmit}>
                <input className={`${styles.contactform__input} ${styles.contactform__input1}`} type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required/>
                <input className={`${styles.contactform__input} ${styles.contactform__input2}`} type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
                <input className={`${styles.contactform__input} ${styles.contactform__input3}`} type="text" name="address" value={address} onChange={handleChange} placeholder="Address" required/>
                <input className={`${styles.contactform__input} ${styles.contactform__input4}`} type="text" name="phone" value={phone} onChange={handleChange} placeholder="Phone" required/>
                <textarea className={styles.contactform__textarea} value={desc} onChange={handleChange} name="desc" placeholder="Message"></textarea>
                <button className={styles.contactform__btn} type="submit">Send Now</button>
        </form>
        <div className={styles.contactinfo}>
              <h2 className={styles.contactinfo__heading}>Contact Info</h2>
              <ul className={styles.contactinfo__list1}>
                <li className={styles.contactinfo__list1item}><i aria-hidden className="fas fa-globe"></i>123 lorem ispum Abc, Street Chandigarh.</li>
                <li className={styles.contactinfo__list1item}><i aria-hidden className="far fa-envelope"></i>example@test</li>
                <li className={styles.contactinfo__list1item}><i aria-hidden className="fas fa-phone"></i>1-234-567-890 <br/> 1-234-567-890</li>
              </ul>
              <ul className={styles.contactinfo__list2}>
                <li className={styles.contactinfo__list2item_follow}>Follow on: </li>
                <li className={styles.contactinfo__list2item}><a href="#"><i aria-hidden className="fab fa-facebook-f"></i></a></li>
                <li className={styles.contactinfo__list2item}><a href="#"><i aria-hidden className="fab fa-twitter"></i></a></li>
                <li className={styles.contactinfo__list2item}><a href="#"><i aria-hidden className="fab fa-google-plus-g"></i></a></li>
                <li className={styles.contactinfo__list2item}><a href="#"><i aria-hidden className="fab fa-dribbble"></i></a></li>
                <li className={styles.contactinfo__list2item}><a href="#"><i aria-hidden className="fab fa-pinterest-p"></i></a></li>
              </ul>
        </div>
    </div>
</div>
  );
};

export default contact;
