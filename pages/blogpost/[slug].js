import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import styles from '@/styles/main.module.scss'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

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
  <div className={styles.entry_content}>
    <p>{blog && blog.content}</p>
  </div>
</article>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
return {
  props: {myBlog}, // will be passed to the page component as props
}
}

export default Slug;