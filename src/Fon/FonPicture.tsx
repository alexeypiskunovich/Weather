import React from "react";
import { useSelector } from "react-redux";
import { Weather } from "../Redux/profile-reducer";
import rain from "./../Picture/Rain.gif";
import sun from "./../Picture/Sun.gif";
import snow from "./../Picture/Snow.gif";
import cloud from "./../Picture/Cloud.gif";
import { Box } from "@mui/material";


const styles = {
  box: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter: 'blur(40px)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const Fon: React.FC = () => {
  const weather = useSelector((state: { profilePage: { weather: Weather } }) => state.profilePage.weather);
  
  const getWeatherImage = (id: number | undefined) => {
    if (id === undefined) return sun;
    if (id >= 200 && id < 600) return rain; 
    if (id >= 600 && id < 700) return snow;
    if (id > 800) return cloud;
    return sun; 
  };
  const backgroundImage = getWeatherImage(weather?.id);

  return (
    <Box
      sx={{
        ...styles.box,
        backgroundImage: `url(${backgroundImage})`,
      }}
    />
  );
};

export default Fon;