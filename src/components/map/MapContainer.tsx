import { Pharmacy } from "../../models/pharmacy.model";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const googleApiKey = "AIzaSyAbJ4KyUMJNQedbUrtJKRRxU57TATBw5Mo";

const containerStyle = {
  width: "400px",
  height: "400px",
};

interface PharmacyProps {
  pharmacy: Pharmacy;
}

const MapContainer = (pharmacy: PharmacyProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApiKey,
  });

  const [, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: pharmacy.pharmacy.address.coordinates.latitude,
        lng: pharmacy.pharmacy.address.coordinates.longitude,
      }}
      zoom={16}
      //onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        title={pharmacy.pharmacy.name}
        position={{
          lat: pharmacy.pharmacy.address.coordinates.latitude,
          lng: pharmacy.pharmacy.address.coordinates.longitude,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapContainer;
