import axios from 'axios';

export const mainAPI = async (city: string | null): Promise<any> => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${'RU'}&units=metric&appid=e9ba8a9976e337c45a0d402f3f7461a9`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

export const weatherDayAPI = async (city: string | null): Promise<any> => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${'RU'}&units=metric&cnt=20&appid=e9ba8a9976e337c45a0d402f3f7461a9`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error; 
  }
};

export const reverseGeocode = async (lat: number, lng: number): Promise<string | null> => {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    const address = response.data?.address;
    return address?.city || address?.town || address?.village || null;
  } catch (error) {
    console.error('Error fetching reverse geocode data: ', error);
    throw error;
  }
};



