import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] }) 
import { useState,useEffect } from 'react'
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
   
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
      </div>
    </div>
    </>
  )
}
export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogsapi')
    let allBlogs = await data.json();
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;