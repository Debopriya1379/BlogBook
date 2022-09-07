import { Box, Container, Typography,styled,InputBase,IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { collection,onSnapshot } from "firebase/firestore";
import BlogCard from "../components/BlogCard";
import db from '../firebase-config'

const Search = styled('div')(({theme})=>({
    border: '1px solid grey',
    padding: '2px 15px',
    borderRadius: theme.shape.borderRadius,
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }))

export default function SearchResults() {

    const [searchText,setSearchText] = useState('')
    const [allBlogs,setAllBlogs] = useState([])
    const [filteredData,setFilteredData] = useState([])

    const getBlogs=()=>{
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
        // eslint-disable-next-line
    },[])


    return (
        <Box sx={{margin:'0px auto',mt:'30px'}}>
            <Container sx={{width:{xs:'100%',sm:'90%',md:'50%'}}}>
            <Search>
                <InputBase 
                placeholder="search" 
                sx={{color:'black',p:0}}
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
                <IconButton onClick={()=>handleFilter()}>
                    <SearchIcon/>
                </IconButton>
            </Search>
                {filteredData.length !== 0 ? <Typography variant="h6">Search results</Typography> : ''}
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
