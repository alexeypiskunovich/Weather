import { Box, Typography } from "@mui/material";
import React from "react";
import { DayWeather } from "../../Redux/profileday-reducer";
import IconDayHour from "./IconDayHour";

type IconWithWeatherProps = {
    day: DayWeather[];
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
    },
    temperature: {
        fontSize: '30px',
    },
    description: {
        lineHeight: 1.1,
    },
    detailsBox: {
        marginLeft: '15px',
        maxWidth: { md: '100px', xs: '140px' },
    },
};

const IconWithWeather: React.FC<IconWithWeatherProps> = ({ day }) => {
    return (
        <Box sx={styles.container}>
            <IconDayHour day={day} />
            <Box sx={styles.detailsBox}>
                <Typography sx={styles.temperature}>{day[0].main.temp}°C</Typography>
                <Typography variant="h6" sx={styles.description}>{day[0].weather[0]?.description}</Typography>
            </Box>
        </Box>
    );
}

export default IconWithWeather;