
import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getData } from "../service/api.js";
import Information from "./Information";

// const [city,setCity]=useEffect("mumbai");


const useStyles = makeStyles({

  input: {
    color: "#ffff",
    marginRight: 15,
    width: 170,
  },
  component: {
    padding: 10,
    // background: "#445e6f"
    background: "rgb(0 0 0 / 26%);"
  },

  button: {
    color: "",
    width: 50,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
  }

}

)



const Form = () => {
  const classes = useStyles();
  const [data, getWeatherData] = useState();
  const [city, setCity] = useState("");
  const [click, handleClick] = useState(false);
  const [country, setCountry] = useState("");


  useEffect(() => {
    const getWeather = async () => {
     city&& await getData(city, country).then(response => {
        getWeatherData(response.data);
        console.log(response.data);
      })
    }
    getWeather();
    handleClick(false);

  }, [click])

  const handleCityChange = (value) => {
    setCity(value);
  }
  const handleCountryChange = (value) => {
    setCountry(value);
  }

  return (
    <>
      <Box className={classes.component}>

        <TextField id="" label="City"
          onChange={(e) => handleCityChange(e.target.value)}
          inputProps={{ className: classes.input }} className={classes.input} />

        <TextField label="Country"
          onChange={(e) => handleCountryChange(e.target.value)}
          style={{ width: "80", marginRight: "20" }} />


        <Button
          onClick={() => handleClick(true)}
          className={classes.button} variant="contained" color="secondary"> Get</Button>
      </Box>
      <Information data={data} />
    </>

  )
}
export default Form;