import { makeStyles,  Container } from "@material-ui/core";
import Post from "./Post";
import {Posts} from'../Data';
import Share from "./share/share";




 const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
   },

 }));

 const Feed = () => {
   const classes = userStyles();

    return (
      <Container className={classes.container}>
        <Share/>
      {Posts.map((p) => (
      <Post key={p.id} post={p}/>
      ))}
        
        
        </Container>
  );
};

export default Feed;
