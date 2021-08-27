import { Box, makeStyles } from "@material-ui/core";
import logo from "../images/logo.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import Form from "./Form";
// import Information from "./Information";
// import "./weather.css";
const useStyles = makeStyles({
  container: {
    height: "100vh",
    display:"flex",
    alignItems:"center",
    width:"50%",
    margin:" 0 auto",


  },
  leftContainer: {
    backgroundImage: `url(${pic2})`,
    height: "80%",
    width: "35%",
    backgroundSize:"cover",
    borderRadius:"20px 0 0 20px",
  },
  rightContainer:{
// background:"linear-gradient(to right, teal,pink)",
background:"linear-gradient(to right, #4d6868,#d39ba5)",


height:"80%",
width:"100%",

  }

}

)




const Weather = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
        <Form />
        
      </Box>
    </Box>
  )
}
export default Weather;