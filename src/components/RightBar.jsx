import {Box,Card,CardActionArea,CardMedia,Typography,CardContent} from '@mui/material'

export default function RightBar() {
  return (
    <Box flex={3} p={2} alignItems='center'>
        <Box position='fixed' sx={{padding:'20px'}}>
          <Typography variant='h6' component='div' sx={{marginBottom:'25px'}}>Advertisements</Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWWLSt48PbMel0j1HfWZxlGrYyI1GW18fdQ&usqp=CAU'
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Advertisement 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deserunt soluta fugiat praesentium.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k0RaiTsLDJ3IM1w79qa2_zMgW4XBcbMhTw&usqp=CAU'
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Advertisement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deserunt soluta fugiat praesentium.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
    </Box>
  )
}
