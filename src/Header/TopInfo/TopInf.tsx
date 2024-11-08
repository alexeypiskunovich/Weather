import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Weather } from "../../Redux/profile-reducer";
import TempInf from "./PartInfo/TempInf";
import TimeStamp from "./PartInfo/TimeStamp";
import Wind from "../../Icon/wind.png";
import Compass from "../../Icon/Compass.png";
import Humidity from "../../Icon/humidity.png";
import Pressure from "../../Icon/Pressure.png";
import style from "./TopInfo.module.css";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: { md: '150px' }
  },
  typography: {
    fontSize: { xs: 18, sm: 22, md: 26 },
    color: 'black'
  },
  box: {
    maxWidth: { xs: 18, sm: 22, md: 26 }
  },
};

const TopInf: React.FC = () => {
  const weather = useSelector((state: { profilePage: { weather: Weather } }) => state.profilePage.weather);

  if (!weather) {
    return null; 
  }

  return (
    <section className={style.TopInfoPosition}>
      <TempInf weather={weather} />
      <Container sx={styles.container}>
        <Typography sx={styles.typography}>
          <Box component="img" alt="Wind icon" src={Wind} sx={styles.box} />
          Скорость ветра: {weather.wind.speed} м/c,
          <Box component="img" alt="Compass icon" src={Compass} sx={styles.box} />
          Направление ветра: {weather.wind.deg} градусов
        </Typography>
        <Typography sx={styles.typography}>
          <Box component="img" alt="Humidity icon" src={Humidity} sx={styles.box} />
          Влажность: {weather.main.humidity}%, 
          <Box component="img" alt="Pressure icon" src={Pressure} sx={styles.box} />
          Давление: {weather.main.pressure} гПа
        </Typography>
        <TimeStamp weather={weather} />
      </Container>
    </section>
  );
};

export default TopInf;

