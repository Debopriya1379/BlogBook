import {Box,Stack} from '@mui/material'
import LeftBar from '../components/LeftBar';
import Feed from '../components/Feed';
import RightBar from '../components/RightBar';

export default function Home() {
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' spacing={0} >
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  )
}
