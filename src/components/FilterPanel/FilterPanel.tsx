import { Input, Button, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { findPharmacyByGeolocation } from "../../modules/pharmacyModule";
import { Coordinates } from "../../models/coordinates.model";
import { useAppDispatch } from "../../store/hooks";

const { Search } = Input;

const onSearch = () => {
  alert("Nones");
};

const FilterPanel = () => {
  const dispatch = useAppDispatch();

  const onLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      const coordinates: Coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      dispatch(findPharmacyByGeolocation(coordinates));
    });
  };

  return (
    <Space wrap>
      <Search
        placeholder="Localidad de farmacia"
        allowClear
        enterButton="Buscar"
        style={{ width: 320 }}
        onSearch={onSearch}
      />
      <Button type="primary" shape="circle" onClick={onLocation}>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
      </Button>
    </Space>
  );
};

export default FilterPanel;
