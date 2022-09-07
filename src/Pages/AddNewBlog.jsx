import { Box,Typography,Container,styled,TextField,Button,Select,MenuItem,InputLabel, FormControl, Stack } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {collection,addDoc} from 'firebase/firestore'
import db from '../firebase-config'

const StyledContainer = styled(Container)(({theme})=>({
  display: 'flex',
  flexDirection : 'column',
  alignItems : 'flex-start',
  justifyContent : 'space-between',
  gap: 20,
  marginTop: 20,
}))

export default function AddNewBlog() {

  const navigate = useNavigate()
  const[newTitle,setNewTitle]= useState('')
  const[newContent,setNewContent]= useState('')
  const[newCoverImg,setNewCoverImg]=useState('')
  const[blogCategory,setBlogCategory]=useState('')

  const handleSubmit =async()=>{
    if(!newTitle || !newContent || !blogCategory){
      alert("please fill up the blanks first")
    } else {
      const blogsCollectionref = collection(db,'blogs')
      await addDoc(blogsCollectionref,{
        title : newTitle,
        content : newContent,
        category : blogCategory,
        img : newCoverImg ? newCoverImg : "https://images.pexels.com/photos/3807741/pexels-photo-3807741.jpeg?auto=compress&cs=tinysrgb&w=600"
      })
      ///////////////////////////////////
      // alert('Blog published successfully')
      setNewTitle('')
      setNewContent('')
      setBlogCategory('')
      setNewCoverImg('')
      navigate('/')
    }
  }

  const handleCancel =()=>{
    console.log('new post canceled')
    setNewTitle('')
    setNewContent('')
    setBlogCategory('')
    setNewCoverImg('')
    navigate('/')
  }

  return (
    <Box>
      <StyledContainer>
        <Typography variant="h5">Add New Post</Typography>
        {/* <CardMedia
            component="img"
            height="250px"
            image="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="media"
            sx={{borderRadius:'10px',width:'87%'}}
        /> */}
        <TextField 
          sx={{width:'87%'}} 
          id="outlined-basic" 
          label="Blog Title*" 
          variant="outlined" 
          value={newTitle}
          onChange={(e)=>setNewTitle(e.target.value)}
        />
        <TextField 
          sx={{width:'87%'}} 
          id="outlined-basic" 
          label="Cover image link" 
          variant="outlined" 
          value={newCoverImg}
          onChange={(e)=>setNewCoverImg(e.target.value)}
        />
        <TextField
          id="standard-multiline-static"
          label="Whats on your mind*"
          multiline
          rows={4}
          variant="standard"
          sx={{width:'87%'}}
          value={newContent}
          onChange={(e)=>setNewContent(e.target.value)}
        />
        <Stack direction='row' spacing={5} sx={{width:"50%"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type*</InputLabel>
            <Select
              sx={{width:'100%'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={blogCategory}
              label="Type"
              onChange={(e)=>setBlogCategory(e.target.value)}
              >
              <MenuItem value={'Education'}>Education</MenuItem>
              <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
              <MenuItem value={'Technology'}>Technology</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{width:'70%'}} variant="contained" color="success" onClick={()=>{handleSubmit()}}>publish</Button>
          <Button sx={{width:'70%'}} variant="contained" color="error" onClick={()=>{handleCancel()}}>cancel</Button>
        </Stack>
      </StyledContainer>
    </Box>
  )
}
