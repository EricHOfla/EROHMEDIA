import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar,  } from "@material-ui/core";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Cancel, Mail, Notifications, Search,   } from "@material-ui/icons";
import { useState, folse} from "react";
import { Users } from "../Data";


const userStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },



  logoLg:{
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm:{
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },



  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props)=> props.open ? "flex" : "none",
      with: "70%",
      
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2)
  },
  concel: {
 [theme.breakpoints.up("sm")]: {
  display: "none",
 }
  },
  searchbotton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    
    alignItems: "center",
    
      display: (props)=> props.open ? "none" : "flex",
    
  },
  badge: {
    marginRight: theme.spacing(2),
  },






}));

const Navbar = () => {
  const [open, SetOpen] = useState(folse);

  const classes = userStyles({ open });
   return (
   <AppBar position="fixed">
     <Toolbar className={classes.toolbar}>
     <Typography variant="h6" className={classes.logoLg}>
      EROH Technology
     </Typography>
     <Typography variant="h6" className={classes.logoSm}>
      EROH Tech
     </Typography>
     <div className={classes.search}>
      <Search/>
      <InputBase placeholder="search..." className={classes.input} />
      <Cancel className={classes.concel} onClick={() => SetOpen(folse)} />
      
     </div>
     
     <div className={classes.icons}>
     <Search className={classes.searchbotton}
     onClick={() => SetOpen(true)}/>

       <Badge badgeContent={9} color="secondary" className={classes.badge}>
        <Mail />
       </Badge>
       <Badge badgeContent={5} color="secondary" className={classes.badge}>
        <Notifications />
       </Badge>
        <Avatar alt={Users.filter((u) => u.id)[0].username} src={Users.filter((u) => u.id)[0].proflePicture}/>
     </div>
     </Toolbar>
    </AppBar>
        
    );

};

export default Navbar;
