import { Paper, Grid, Typography, Icon, Container, Box } from "@mui/material";
import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useSelector } from "react-redux";
import { DayWeather } from "../Redux/profileday-reducer";
import { Weather } from "../Redux/profile-reducer";
import ButtonAddWeather from "./ButtonAddWeather"; // Импортируем новый компонент
import IconWithWeather from "./IconDayWeather/IconWithWeather";

const styles = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '5px solid white',
    minHeight: '445px',
    borderRadius: '15px',
  },
  title: {
    fontSize: '30px',
    textAlign: 'center',
  },
  paper: {
    padding: '10px',
    margin: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    border: '5px solid white',
  },
  dateTitle: {
    fontWeight: 'bold',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: { md: '-25px' },
  },
};

const WeatherForecast: React.FC = () => {
  const weatherData = useSelector((state: { profileDayPage: { dayWeather: DayWeather[] } }) => state.profileDayPage.dayWeather);
  const weather = useSelector((state: { profilePage: { weather: Weather } }) => state.profilePage.weather);

  const getUniqueDays = (data: DayWeather[]) => {
    const uniqueDays = new Map<string, DayWeather[]>();
    data.forEach(day => {
      const date = day.dt_txt.split(" ")[0];
      if (!uniqueDays.has(date)) {
        uniqueDays.set(date, []);
      }
      uniqueDays.get(date)!.push(day);
    });
    return Array.from(uniqueDays.values()).slice(0, 5);
  };

  const groupedWeatherData = getUniqueDays(weatherData);

  return (
    <Container sx={styles.container}>
      {weather && (
        <Typography variant="h6" sx={styles.title}>
          Погода на несколько дней:
        </Typography>
      )}
      <Grid container spacing={4} justifyContent="center">
        {groupedWeatherData.map((day, index) => (
          <Grid item md={12} key={index}>
            <Paper sx={styles.paper}>
              <Typography variant="h4" sx={styles.dateTitle}>{day[0].dt_txt.split(" ")[0]}</Typography>
              <Box sx={styles.box}>
                <IconWithWeather day={day} />
                <ButtonAddWeather day={day} index={index} />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WeatherForecast;