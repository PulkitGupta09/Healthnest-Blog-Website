import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/main.module.scss'

const Slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter()
  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
    }).then((parsed)=>{
      // console.log(parsed);
      setBlog(parsed);
    })
    },[router.isReady])
    


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

export default Slug;