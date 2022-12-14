import './share.css';
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons'
import {makeStyles,Avatar} from '@material-ui/core';
const useStyles= makeStyles( (theme) => ({
    container: {         
      [theme.breakpoints.down("sm")]:{
          
      },       
    },
    avatar: {
        objectFit:"cover", 
        merginRight:theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
         fontSize:"12px",
        },        
    },
    shareOptionText:{
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
    },
    shareButton:{
        padding: "8px",
        marginLeft: "75px",
        border:"none",   
        borderRadius: "5px",
        backgroundColor: "green",
        fontWeight: 500,
        color: "white",
        fontStyle:"bold", 
        [theme.breakpoints.down("sm")]:{
            fontSize:"12px",
            marginLeft:"20px", 
           }, 
        [theme.breakpoints.down("md")]:{
            fontSize:"12px",
            marginLeft:"20px", 
           }, 
        },

}));

const SharePost = () => {     
    const classes = useStyles(); 
    return (
        <div className={classes.container}>
        <div className="share" >
            <div className="shareWrapper">
                <div className="shareTop">
                <Avatar  src="/assets/img/1.jpg" alt="No image"></Avatar>
                    <input className="shareInput" placeholder="What is in your mind" />
                </div>
                <hr className="sharehr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareImage" />
                            <span className={classes.shareOptionText}>Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareImage" />
                            <span className={classes.shareOptionText}>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareImage" />
                            <span className={classes.shareOptionText}>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareImage" />
                            <span className={classes.shareOptionText}>Feelings</span>

                        </div>
                        <button className={classes.shareButton}>Share</button>
                    </div>
                </div>
            </div> 
        </div>
        </div>
    )
}


export default SharePost;
