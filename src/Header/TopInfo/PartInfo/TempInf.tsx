import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Weather } from "../../../Redux/profile-reducer";
import WeatherDetection from "../../../WeatherDetection/WeatherDetection";
import MainThermometr from "./../../../Icon/MainThermometr.png";
import HotThermometr from "./../../../Icon/HotThermometr.png";
import FeelWeather from "../../../Icon/feelweather.png";
import ColdThermometr from "../../../Icon/ColdThermometr.png";
const styles = {
    tempTypography: {
        display: 'flex',
        alignItems: 'center',
        fontSize: { xs: 22, sm: 40, md: 40 },
        color: 'black',
        maxWidth: { xs: '320px', sm: '495px', md: '550px' },
        lineHeight: 1.1,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: { md: '150px' },
    },
    detailTypography: {
        fontSize: { xs: 18, sm: 22, md: 26 },
        color: 'black',
    },
    thermometerIcon: {
        width: { xs: 40, sm: 65, md: 80 },
    },
    smallThermometerIcon: {
        width: { xs: 18, sm: 22, md: 26 },
    },
};


const TempInf: React.FC<{ weather: Weather }> = ({ weather }) => {
    
    return (
        <>
            <Typography sx={styles.tempTypography}>
                <Box component="img" src={MainThermometr} alt="Thermometr" sx={styles.thermometerIcon} />
                {weather.main.temp > 0 ? `+${weather.main.temp}` : weather.main.temp}°C
                <WeatherDetection weather={weather}/>
            </Typography>
            <Container sx={styles.container}>
                <Typography sx={styles.detailTypography}>
                    <Box component="img" src={HotThermometr} alt="Thermometr" sx={styles.smallThermometerIcon} />
                    Макс. {weather.main.temp_max}°C,
                    <Box component="img" src={ColdThermometr} alt="Thermometr" sx={styles.smallThermometerIcon} />
                    Мин. {weather.main.temp_min}°C,
                    <Box component="img" src={FeelWeather} alt="Thermometr" sx={styles.smallThermometerIcon} /> Ощущается как {weather.main.feels_like}°C
                </Typography>
            </Container>
        </>
    );
}

export default TempInf;
