import { 
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography, } from "@material-ui/core";
 


  
 const userStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    media: {
      height: 1000,
      objectPosition:"cover",
      [theme.breakpoints.down("sm")]: {
        height: 250,
      }
    },
  
 }));

 const Post = ({ post }) => {
   const classes = userStyles();

    return <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            image={post?.photo}
            title= "My post"
            />
            <CardContent>
              <Typography gutterBottom variant="h6">{post?.desc}</Typography>
              <Typography variant="body2">
               
              Banyamulenge make fresh call for justice over
                Gatumba massacre
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people
                v Banyamulenge make fresh call for justice over
                Gatumba massacre
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people Banyamulenge make fresh call for justice over
                Gatumba massacre
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people
                </Typography>
            </CardContent>
        </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
         </CardActions>
    </Card>
};

export default Post;
