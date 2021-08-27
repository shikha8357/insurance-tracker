
import { Box, Typography, makeStyles } from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DehazeIcon from '@material-ui/icons/Dehaze';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';





const useStyles = makeStyles({
    component: {
        margin: 55,



    }, value: {
color:"white",
    },

    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,

    },
    icons:{
        marginRight:15,
color:"white",
    }

}

)





const Information = ({ data }) => {
    const classes = useStyles();
    return (

        data ?
            <Box className={classes.component}>
                <Typography className={classes.row} onChange={(e) => e.target.value}> < LocationOnIcon className={classes.icons}/>Location <Box  className={classes.value}
                component="span">{data.name} ,{data.sys.country}</Box>
                </Typography>
                <Typography className={classes.row}> <SettingsBrightnessIcon className={classes.icons}/>Temperature <Box className={classes.value}  component="span">{data.main.temp} °C </Box></Typography>
                {/* <div style={{color:"black",background:"black"}}> <i class="fas fa-thermometer"></i></div> */}
                <Typography className={classes.row}><OpacityIcon className={classes.icons}/>Humidity<Box className={classes.value}  component="span"> {data.main.humidity}%</Box></Typography>
                <Typography className={classes.row}><Brightness5Icon className={classes.icons}/>Sun Rise <Box className={classes.value}  component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}> <Brightness4Icon className={classes.icons}/>Sun Set <Box className={classes.value}  component="span"> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}> <DehazeIcon className={classes.icons} />Condition <Box  className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
                <Typography className={classes.row}> <WbCloudyIcon className={classes.icons}/>Clouds  <Box className={classes.value}  component="span">{data.clouds.all}%</Box> </Typography>
               
              
            </Box> : ""
    )
}
export default Information;
