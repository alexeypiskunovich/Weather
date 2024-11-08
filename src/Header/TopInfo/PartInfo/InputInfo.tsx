import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CityState } from "../../../Redux/map-reducer";
import { fetchWeatherData } from "../../../Redux/profile-reducer";
import { fetchDayWeatherData } from "../../../Redux/profileday-reducer";
import { AppDispatch } from "../../../Redux/redux-store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Input } from "@mui/material";
import style from "./Input.module.css";

const styles = {
  inputBoxMain: {
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' }
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    fontSize: '20px',
    marginBottom: { xs: '10px', md: '0' },
  },
  errorMessage: {
    color: 'red',
    marginBottom: { xs: '10px' },
  },
  button: {
    marginLeft: { xs: '0px', sm: '30px' },
    width: { xs: '100%', sm: 'auto' },
    fontSize: '20px',
    color: 'black',
  },
};

const InputInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const City = useSelector((state: { mapPage: CityState }) => state.mapPage.city);

  const handleSearch = (cityName: string) => {
    dispatch(fetchWeatherData(cityName));
    dispatch(fetchDayWeatherData(cityName));
  };

  useEffect(() => {
    if (City) {
      handleSearch(City);
    }
  }, [City]);

  const validationSchema = Yup.object().shape({
    city: Yup.string().required("Город обязателен для заполнения"),
  });

  const onSubmit = (values: { city: string }) => {
    handleSearch(values.city);
  };

  return (
    <div className={style.main}>
      <Formik
        initialValues={{ city: City || "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
        enableReinitialize={true}
      >
        <Form>
          <Box sx={styles.inputBoxMain}>
            <Box sx={styles.inputBox}>
              <Field
                as={Input}
                name="city"
                sx={styles.inputField}
                placeholder="Введите название города"
              />
              <Box sx={styles.errorMessage}>
                <ErrorMessage name="city" />
              </Box>
            </Box>
            <Button
              type="submit"
              variant="outlined"
              color="inherit"
              sx={styles.button}
            >
              Поиск
            </Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};

export default InputInfo;