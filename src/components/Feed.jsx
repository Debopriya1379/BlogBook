import {Box,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import { useState } from 'react'
import BlogsContainer from './BlogsContainer';

export default function Feed() {

    const [tabVal, setTabVal] = useState('1');

    const handleTabChange =(event,newValue)=>{
        setTabVal(newValue)
    }

    return (
        <Box flex={5} p={2} alignItems='center'>
            <TabContext value={tabVal}>
                <Box>
                    <TabList aria-label='Tabs' onChange={handleTabChange}>
                        <Tab label='Education' value='1' />
                        <Tab label='Entertainment' value='2' />
                        <Tab label='Tech' value='3' />
                    </TabList>
                    <TabPanel value='1'>
                        <BlogsContainer tab='Education'/>
                    </TabPanel>
                    <TabPanel value='2'>
                        <BlogsContainer tab='Entertainment'/>
                    </TabPanel>
                    <TabPanel value='3'>
                        <BlogsContainer tab='Technology'/>
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    )
}
