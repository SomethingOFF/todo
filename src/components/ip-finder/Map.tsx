import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
interface MapProps {
  lat: number;
  lon: number;
  data: any;
}

const Map: React.FC<MapProps> = ({ lat, lon, data }) => {
  return (
    <div className="w-full h-full">
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            <p className="text-lg">Ip : {data.ip}</p>
            <p>postalcode : {data.postal}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
