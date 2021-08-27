import axios from "axios";

const URL="https://api.openweathermap.org/data/2.5/weather";
const API="3394afb5fa08db915867693b6c142614"

export const getData=async (city,country)=>{
    return await axios.get(`${URL}?q=${city} ,${country}&appid=${API}&units=metric`);
    // ?q=mumbai ,india&appid=

}