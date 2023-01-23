import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] }) 
import { useState } from 'react'
import * as fs from 'node:fs';
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
   
  return (
    <>
    <Head>
        <title>Healthnest</title>
        <meta name="description" content="All about health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.blogcontainer}>
      <div className={`${styles.sdcontainer} ${styles.sdcontainer__addblog}`}>
        {blogs.map((blogitem)=>{
          return <div key={blogitem.link} className={styles.sdcontainer__card}>
            {/* <Image
              className={styles.sdcontainer__card__img}
              src={blogitem.imglink}
              width={192*1.7}
              height={128*1.7}
              alt="egg image"
            />  */}
            <img src={blogitem.imglink} alt="egg image" width={192*1.7}
              height={128*1.7} className={styles.sdcontainer__card__img} />
        <h4 className={styles.sdcontainer__card_head4}>{blogitem.namedate}</h4>
        <Link href={`blogpost/${blogitem.link}`} className={styles.sdcontainer__card_link}><h2 className={styles.sdcontainer__card_head2}>{blogitem.title}</h2></Link>
        <h3 className={styles.sdcontainer__card_head3}>{blogitem.metadesc.substr(0,100)}</h3>
        </div>
        })}
      </div>
    </div>
    </>
  )
}



export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allBlogs = [];
  let myfile;

  for (let index = 0; index < data.length; index++) {
    myfile = await fs.promises.readFile(('blogdata/' + data[index]),'utf-8')
          allBlogs.push(JSON.parse(myfile));    
      }
    
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogsapi')
//     let allBlogs = await data.json();
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export default Blog;