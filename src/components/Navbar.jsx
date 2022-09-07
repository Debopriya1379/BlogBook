import{AppBar,Toolbar,styled,Box,Badge,Avatar,InputBase,Typography,Button,IconButton} from '@mui/material'
import { Notifications,Mail,Pets } from "@mui/icons-material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  color: 'black',
})

const Logo = styled('div')(({theme})=>({
  display: 'flex',
  alignItems : 'center',
  justifyContent : 'space-between',
  gap: 10,
}))

const Search = styled('div')(({theme})=>({
  border: '1px solid grey',
  padding: '2px 15px',
  borderRadius: theme.shape.borderRadius,
  width: '35%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const Icons = styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap:'20px',
  [theme.breakpoints.up('sm')]: {
      display: 'flex'
  }
}))

export default function Navbar() {

  const navigate = useNavigate()

  const [serchText,setSearchText]= useState('')

  const handleNavigate=()=>{
    navigate('/new')
  }

  return (
    <AppBar position='sticky'>
        <StyledToolBar>
          <Logo>
            <Pets/>
            <Typography variant='h6'>Blogger</Typography>
          </Logo>
          <Search>
            <InputBase 
              placeholder="search" 
              sx={{color:'black',p:0}}
              value={serchText}
              onChange={(e)=>setSearchText(e.target.value)}
            />
            <IconButton>
              { serchText && <Link to={`/search/${serchText}`}>
                <SearchIcon/>
              </Link>}
            </IconButton>
          </Search>
          <Icons>
            {( window.location.pathname === '/new') ? '' : (<Button onClick={()=>handleNavigate()} sx={{border:'1px solid blue', padding:'5px 20px', marginRight:'50px'}}>Add New</Button>)}
            <Badge badgeContent={4} color='error' >
                <Mail/>
            </Badge>
            <Badge badgeContent={4} color='error' >
                <Notifications/>
            </Badge>
            <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Icons>
        </StyledToolBar>
    </AppBar>
  )
}
