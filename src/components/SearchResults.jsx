import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection,onSnapshot } from "firebase/firestore";
import BlogCard from "./BlogCard";
import db from '../firebase-config'

export default function SearchResults() {

    const{searchText}= useParams()
    const [allBlogs,setAllBlogs] = useState([])
    const [filteredData,setFilteredData] = useState([])

    const getBlogs=()=>{
        console.log('get blogs')
        const blogsCollectionref = collection(db,'blogs')
        onSnapshot(blogsCollectionref,(snapshot)=>{
          setAllBlogs(snapshot.docs.map(
            (doc)=>({...doc.data(), id: doc.id })
          ));
        });
    }

    const handleFilter=()=>{
        const searchWord = searchText;
        const newFilter = allBlogs.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }

    useEffect(()=>{
        getBlogs()
        handleFilter()
    },[searchText])


    return (
        <Box sx={{margin:'0px auto',mt:'30px'}}>
            <Container sx={{width:{xs:'100%',sm:'90%',md:'50%'}}}>
                <Typography variant="h6">Search results</Typography>
                {
                    (filteredData.length !== 0) && 
                    filteredData.map((data)=>{
                        return(
                            <BlogCard data={data} key={data.id}/>
                        )
                    })
                }
            </Container>
        </Box>
    )
}
