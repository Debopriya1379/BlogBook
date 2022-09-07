import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch } from "@mui/material"
import { AccountBox,Group,Home,ModeNight,Person,Settings,Bookmarks } from "@mui/icons-material"
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function LeftBar() {
    return (
        <Box flex={2} p={2} sx={{display:{ xs:'none', sm:'none', md:'block'}}} >
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#new">
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add New" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Bookmarks />
                        </ListItemIcon>
                        <ListItemText primary="Reading List" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        {/* <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/> */}
                        <Switch/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}