import { makeStyles, Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";



 const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
   },
   title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  }

 }));

 const Rightbar = () => {
   const classes = userStyles();

    return (
      <Container className={classes.container}> 
        <Typography className={classes.title} gutterBottom>Close Friends</Typography>
        <AvatarGroup max={5} style={{marginBottom: 20}}>
          <Avatar alt="Jabo" src="assets/img/1.jpg"/>
          <Avatar alt="Colah" src="1.jpg"/>
          <Avatar alt="Fabrice" src=""/>
          <Avatar alt="Alice" src="assets/img/work-7.jpg"/>
          <Avatar alt="Emelance" src="1.jpg"/>
          <Avatar alt="Khalifa" src="1.jpg"/>
          <Avatar alt="Jabo" src="assets/img/1.jpg"/>
          <Avatar alt="Colah" src="1.jpg"/>
          <Avatar alt="Fabrice" src="1.jpg"/>
          <Avatar alt="Alice" src="1.jpg"/>
          <Avatar alt="Emelance" src="1.jpg"/>
          <Avatar alt="Khalifa" src="1.jpg"/>
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>Gallery</Typography>
         <ImageList rowHeight={140} style={{marginBottom: 20}} className={classes.imagelist} cols={3}>
         
            <ImageListItem >
              <img src="assets/img/work-6.jpg" alt="Blessy"/>
            </ImageListItem>
            <ImageListItem >
              <img src="assets/img/work-2.JPG" alt="Blessy"/>
            </ImageListItem>
              <ImageListItem >
              <img src="assets/img/work-4.jpg" alt="Blessy"/>
            </ImageListItem> 
             <ImageListItem >
              <img src="assets/img/friend1.jpg" alt="Blessy"/>
            </ImageListItem>
            <ImageListItem >
              <img src="assets/img/work-5.jpg" alt="Blessy"/>
            </ImageListItem>
            <ImageListItem >
              <img src="assets/img/post.JPG" alt="Blessy"/>
            </ImageListItem>
          
         </ImageList>

        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
        <Divider flexItem  style={{marginBottom:5}}/>
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
         Life
        </Link>

      </Container>
  );
};

export default Rightbar;
