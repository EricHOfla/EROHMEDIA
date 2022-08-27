import { 
  Avatar,
  Box,
Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography, } from "@material-ui/core";
import { MoreVert, ThumbUp, ThumbDown, Share, Comment  } from "@material-ui/icons";

import { Users } from "../Data";
 


  
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
    headerTitle: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        width: 190,
      },
   
    },
    name: {
      [theme.breakpoints.down("sm")]: {
        fontSize: 9,
        marginRight: theme.spacing(1),
      },
    },
    dates: {
      marginLeft: theme.spacing(4),
      fontSize: 13,
      [theme.breakpoints.down("sm")]: {
       fontSize: 9,
       marginLeft: theme.spacing(1),
      },
    },
    iconshare:{
      margin: theme.spacing(2),
      display: "flex",
    },
    descc: {
      marginLeft: theme.spacing(2),
    },
    share: {
       display: "flex",
      
    },
    comment:{
     marginLeft: 470,
     [theme.breakpoints.down("sm")]: {
      marginLeft: 55,
     },
    },
  
 }));

 const Post = ({ post }) => {
   const classes = userStyles();

    return (
      <>
    <Box boxShadow={3} className={classes.card}>
    <Card className={classes.root}>
 <CardHeader className={classes.cardheader}
 
   avatar={ 
     <Avatar alt="no profile" src={Users.filter((u) => u.id === post.userId)[0].proflePicture}>            
     </Avatar>
   }  
   action={
     
      <IconButton aria-label="settings">
       <MoreVert />
     </IconButton>
   }

    title={
        <div className={classes.headerTitle}>
      <Typography className={classes.names}> {Users.filter((u) => u.id === post.userId)[0].username}</Typography>
      <Typography className={classes.dates}>  {post.date}</Typography>
     
   </div>} 
 />
        <CardActionArea>
       <div className={classes.descc}> <Typography >{post?.desc}</Typography></div>
            <CardMedia className={classes.media}
            image={post?.photo}
            title= "My post"
            />
            <CardContent>
              
              <Typography variant="body2">
               
            
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people
                v Banyamulenge make fresh call for justice over
                Gatumba massacre
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people 
                Gatumba massacre
                Sunday, August 14, 2022
                The New Times
                Driving instructor arrested for sitting an exam for three people
                </Typography>
            </CardContent>
        </CardActionArea>
         <CardActions className={classes.share}>

         <div className={classes.iconshare}><ThumbUp />

            <Typography>12</Typography></div>
            <div className={classes.iconshare}> <ThumbDown />  

           <Typography>12</Typography></div>
          
           <Share />
         <div className={classes.iconshare}> <Comment className={classes.comment} />  <Typography>12</Typography></div>
       
         </CardActions>
    </Card>
    </Box>
    </>);
};

export default Post;
