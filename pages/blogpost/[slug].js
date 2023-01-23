import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/main.module.scss'
import * as fs from 'node:fs';
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(a) {
    return {__html: a};
  }
  return( 
<article className={`${styles.hentry} ${styles.mg_bg}`}>
  <div className={styles.featured_image}>
    <Image
          className={styles.featured_image__img}
          src={blog && blog.imglink} 
          width={192*6}
          height={128*4}
          alt="blogpost_img"
        />
  </div>
   <h1 className={styles.entry_title}>{blog && blog.title}</h1>
  <div className={styles.entry_meta}>
    <p><span className={styles.author}>Written by <a href="#">{blog && blog.name}</a></span> <span className={styles.date}>{blog && blog.date}</span></p>
  </div>
  <div  />
  <div className={styles.entry_content}>
    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
  </div>
</article>
  )
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogdata')
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0] } }
  })

  return {
    paths: allb,
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
return {
  props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
}
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myBlog = await data.json();
// return {
//   props: {myBlog}, // will be passed to the page component as props
// }
// }

export default Slug;