import React from 'react';
import { Container, styled} from '@mui/material';
import HeaderBox from './Header/HeaderBox';
import WeatherForecast from './WeatherForecast/WeatherForecast ';
import InputInfo from './Header/TopInfo/PartInfo/InputInfo';
import Fon from './Fon/FonPicture';

const styles = {
  container: {
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    border: '2px solid white',
    position: 'relative',
    zIndex: 1,
  },
};

const App: React.FC = () => {
  return (
    <>
      <Fon />
      <Container sx={styles.container}>
        <InputInfo />
        <HeaderBox />
        <WeatherForecast />
      </Container>
    </>
  );
};

export default App;