import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] }) 
import { useState,useEffect } from 'react'
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogsapi').then((a)=>{
      return a.json();
    }).then((parsed)=>{
      console.log(parsed);
      setBlogs(parsed);
    })
  }, [])
  
  return (
    <>
    <Head>
        <title>Healthnest</title>
        <meta name="description" content="All about health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Semi+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Sofia+Sans+Semi+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.blogcontainer}>
      <div className={`${styles.sdcontainer} ${styles.sdcontainer__addblog}`}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.link} className={styles.sdcontainer__card}>
            <Image
              className={styles.sdcontainer__card__img}
              src={blogitem.imglink}
              width={192*1.7}
              height={128*1.7}
              alt="egg image"
            /> 
        <h4 className={styles.sdcontainer__card_head4}>{blogitem.namedate}</h4>
        <Link href={`blogpost/${blogitem.link}`} className={styles.sdcontainer__card_link}><h2 className={styles.sdcontainer__card_head2}>{blogitem.title}</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>{blogitem.content.substr(0,100)}</h3>
        </div>
        })}
        {/* <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/egg_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="egg image"
        />
        <h4 className={styles.sdcontainer__card_head4}>Phoenix Baker . 19 Jan 2023</h4>
        <Link href="/blogpost/Benefits-of-eating-eggs" className={styles.sdcontainer__card_link} > <h2 className={styles.sdcontainer__card_head2}>Benefits of Eating Eggs</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Eggs have been a dietary staple since time immemorial and there good reason for their continued presence in our menus and meals.</h3>
        </div>
        <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/almonds_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="almonds img"
        />
        <h4 className={styles.sdcontainer__card_head4}>Lana Steiner . 18 Jan 2023</h4>
        <Link href="/blogpost/All-about-almonds" className={styles.sdcontainer__card_link} > <h2 className={styles.sdcontainer__card_head2}>All About Almonds</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Almonds are the clear winner when it comes to fiber and protein. They're also naturally low in sugars and are one of the lowest calorie nuts.</h3>
        </div>
        <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/jooging_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="jogging img"
        />
        <h4 className={styles.sdcontainer__card_head4}>Alec Whitten . 17 Jan 2023</h4>
        <Link href="/blogpost/Health-benefits-of-running" className={styles.sdcontainer__card_link} > <h2 className={styles.sdcontainer__card_head2}>Health Benefits of Running</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Jogging or running is a popular form of physical activity. About one in 5 Australians try running (or jogging) at some stage in their life.</h3>
        </div>
        <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/lemon_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="lemon img"
        />
        <h4 className={styles.sdcontainer__card_head4}>Demi Wilkinson . 16 Jan 2023</h4>
        <Link href="/blogpost/Lemons-nutrition-facts" className={styles.sdcontainer__card_link} > <h2 className={styles.sdcontainer__card_head2}>Lemons 101: Nutrition Facts</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Lemons (Citrus limon) are among the world’s most popular citrus fruits.
        They grow on lemon trees and are a hybrid of the original citron and lime.</h3>
        </div>
        <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/strawberry_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="strawberry img"
        />
        <h4 className={styles.sdcontainer__card_head4}>Candice Wu . 15 Jan 2023</h4>
        <Link href="/blogpost/Strawberry-an-overview" className={styles.sdcontainer__card_link}> <h2 className={styles.sdcontainer__card_head2}>Strawberries - an overview</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Strawberry is one of the most economically important berry fruits consumed for its nutrient content and pleasant flavor.</h3>
        </div>
        <div className={styles.sdcontainer__card}>
        <Image
          className={styles.sdcontainer__card__img}
          src="/img/oats_md.jpg"
          width={192*1.7}
          height={128*1.7}
          alt="oats img"
        />
        <h4 className={styles.sdcontainer__card_head4}>Natali Craig . 14 Jan 2023</h4>
        <Link href="/blogpost/Oats-and-oatmeal-guide" className={styles.sdcontainer__card_link} > <h2 className={styles.sdcontainer__card_head2}>Oats and Oatmeal Guide</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>Oats, formally named Avena sativa, is a type of cereal grain from the Poaceae grass family of plants.</h3>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Blog