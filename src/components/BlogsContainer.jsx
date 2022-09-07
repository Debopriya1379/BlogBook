import {Box} from '@mui/material'
import BlogCard from './BlogCard'
import db from '../firebase-config'
import {collection,query,where,onSnapshot} from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function BlogsContainer({tab}) {

  const [allBlogs,setAllBlogs] = useState([])

  const getBlogs=()=>{
    console.log('get blogs')
    const blogsCollectionref = collection(db,'blogs')
    const q = query(blogsCollectionref, where("category", "==", tab))
    onSnapshot(q, (snapshot)=>{
      setAllBlogs(snapshot.docs.map(
        (doc)=>({...doc.data(), id: doc.id })
      ));
    });
  }

  useEffect(()=>{
    getBlogs()
    // eslint-disable-next-line
  },[tab])

  return (
    <Box>
        {
          allBlogs.map((data)=>{
            return(
              <BlogCard data={data} key={data.id}/>
            )
          })
        }
    </Box>
  )
}
