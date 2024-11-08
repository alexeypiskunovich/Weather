import { Box, Typography } from "@mui/material";
import React from "react";
import { Weather } from "../../../Redux/profile-reducer";
import Sunrise from "../../../Icon/sunrise.png";
import Sunset from "../../../Icon/Sunset.png";
import DaySun from "../../../Icon/DaySun.png";

const styles = {
    typography: {
        fontSize: { xs: 18, sm: 22, md: 26 },
        color: 'black',
    },
    icon: {
        width: { xs: 18, sm: 22, md: 26 },
    },
};

const TimeStamp: React.FC<{ weather: Weather }> = ({ weather }) => {
    const sunriseTimestamp = weather.sys.sunrise;
    const sunsetTimestamp = weather.sys.sunset;
    const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
    const sunset = new Date(sunsetTimestamp * 1000).toLocaleTimeString();
    const daylightDuration = new Date((sunsetTimestamp - sunriseTimestamp) * 1000).toUTCString().split(' ')[4];

    return (
        <>
            <Typography sx={styles.typography}>
                <Box component="img" src={Sunrise} sx={styles.icon} alt="Sunrise icon" />
                Восход: {sunrise},
                <Box component="img" src={Sunset} sx={styles.icon} alt="Sunset icon" />
                Заход: {sunset}
                <Typography sx={styles.typography}>
                    <Box component="img" src={DaySun} sx={styles.icon} alt="Daylight duration icon" />
                    Продолжительность дня: {daylightDuration}
                </Typography>
            </Typography>
        </>
    );
}

export default TimeStamp;