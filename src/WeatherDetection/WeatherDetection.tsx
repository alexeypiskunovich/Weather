import React from "react";
import GrainIcon from '@mui/icons-material/Grain';
import { Box} from "@mui/material";
import SunnyIcon from "../Icon/SunnyIcon.png";
import CloudIcon from "../Icon/CloudIcon.png";
import RainIcon from "../Icon/RainIcon.png";
import SnowIcon from "../Icon/SnowIcon.png";
import ThunderStormIcon from "../Icon/ThunderStormIcon.png";
import FogIcon from "../Icon/FogIcon.png"; 
import { Weather } from "../Redux/profile-reducer";


const iconMap: {[key: number]: string} = {
  800: SunnyIcon,
  801: CloudIcon,
  802: CloudIcon,
  803: CloudIcon,
  804: CloudIcon,
  500: RainIcon,
  501: RainIcon,
  502: RainIcon,
  503: RainIcon,
  504: RainIcon,
  511: SnowIcon,
  520: RainIcon,
  521: RainIcon,
  522: RainIcon,
  531: RainIcon,
  200: ThunderStormIcon,
  201: ThunderStormIcon,
  202: ThunderStormIcon,
  210: ThunderStormIcon,
  211: ThunderStormIcon,
  212: ThunderStormIcon,
  221: ThunderStormIcon,
  230: ThunderStormIcon,
  231: ThunderStormIcon,
  232: ThunderStormIcon,
  600: SnowIcon,
  601: SnowIcon,
  602: SnowIcon,
  611: SnowIcon,
  612: SnowIcon,
  613: SnowIcon,
  615: SnowIcon,
  616: SnowIcon,
  620: SnowIcon,
  621: SnowIcon,
  622: SnowIcon,
  701: FogIcon,
  711: FogIcon,
  721: FogIcon,
  731: FogIcon,
  741: FogIcon,
  751: FogIcon,
  761: FogIcon,
  762: FogIcon,
  771: FogIcon,
  781: FogIcon,
};


const WeatherDetection: React.FC<{ weather: Weather }> = ({weather}) => {
   const WeatherIcon = iconMap[weather.id] || GrainIcon;

  return (
    <>
      {typeof WeatherIcon === 'string' && 
        <Box 
          component="img" 
          src={WeatherIcon} 
          alt="Weather Icon" 
          sx={{ width: { xs: 40, sm: 65, md: 80 }, height: 'auto' }} 
        />
      }
      {weather.description}
    </>
  );
};

export default WeatherDetection;
