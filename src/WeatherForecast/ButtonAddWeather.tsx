import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { DayWeather } from "../Redux/profileday-reducer";

type ButtonAddWeatherProps = {
  day: DayWeather[];
  index: number;
}

const styles = {
  button: {
    marginTop: 2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid white',
    borderRadius: '10px',
    minWidth: { md: '300px' },
  },
  cardContent: {
    textAlign: 'center',
  },
  timeText: {
    fontWeight: 'bold',
    color: 'white',
  },
  tempText: {
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionText: {
    color: 'lightgray',
  },
};

const ButtonAddWeather: React.FC<ButtonAddWeatherProps> = ({ day, index }) => {
  const [showHourly, setShowHourly] = useState<{ [key: number]: boolean }>({});

  const toggleHourlyVisibility = (index: number) => {
    setShowHourly(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <>
      <Button variant="outlined" color="inherit" onClick={() => toggleHourlyVisibility(index)}>
        {showHourly[index] ? 'Скрыть почасовую погоду' : 'Показать почасовую погоду'}
      </Button>
      
      {showHourly[index] && (
        <Box sx={styles.button}>
          <Grid container spacing={2}>
            {day.map((hour: DayWeather, hourIndex: number) => (
              <Grid item xs={12} sm={6} md={4} key={hourIndex}>
                <Card sx={styles.card}>
                  <CardContent sx={styles.cardContent}>
                    <Typography variant="h6" sx={styles.timeText}>
                      {hour.dt_txt.split(" ")[1]} 
                    </Typography>
                    <Typography variant="h4" sx={styles.tempText}>
                      {hour.main.temp}°C 
                    </Typography>
                    <Typography variant="body1" sx={styles.descriptionText}>
                      {hour.weather[0]?.description} 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default ButtonAddWeather;