import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

export default function BlogCard({data}) {
  return (
    <Card sx={{margin:'20px auto', width:'95%', borderRadius:'3px' }}>
        <CardMedia
            component="img"
            height="300"
            image={data.img}
            alt="Paella dish"
        />
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="John Doe"
            subheader="September 14, 2022"
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.content}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
      </CardActions>
    </Card>
  )
}
