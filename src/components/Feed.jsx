import { makeStyles,  Container } from "@material-ui/core";
import Post from "./Post";
import {Posts} from'../Data';




 const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
   },

 }));

 const Feed = () => {
   const classes = userStyles();

    return (
      <Container className={classes.container}>
      {Posts.map((p) => (
      <Post key={p.id} post={p}/>
      ))}
        
        
        </Container>
  );
};

export default Feed;
