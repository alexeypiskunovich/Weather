import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useDispatch } from "react-redux";
import { fetchCityByCoordinates } from "../Redux/map-reducer"; 
import { AppDispatch } from "../Redux/redux-store";
import style from "./MapComponent.module.css";

const MapComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        dispatch(fetchCityByCoordinates(lat, lng));
      },
    });

    return null;
  };

  
  return (
    <div className={style.ContainerBox}>
      <MapContainer className={style.mapContainer} center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "120%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
