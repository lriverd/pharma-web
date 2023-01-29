import { Input, Button, Space, Tooltip, InputNumber, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import {
  findPharmacyByGeolocation,
  findPharmacyByLocality,
} from "../../slices/pharmacyListSlice";
import { CoordinatesSearch } from "../../models/coordinates.model";
import { useAppDispatch } from "../../store/hooks";

import "./FilterPanel.scss";
import TabPane from "antd/es/tabs/TabPane";
import { useState } from "react";

const { Search } = Input;

const DEFAULT_RADIUS_VALUE: number = 10;

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const [radius, setRadius] = useState<number>(DEFAULT_RADIUS_VALUE);

  const onSearch = (value: string) => {
    dispatch(findPharmacyByLocality(value));
  };

  const onChangeRadius = (value: number | null) => {
    const newValue: number = value ? value : DEFAULT_RADIUS_VALUE;
    setRadius(newValue);
  };

  const onLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const coordinates: CoordinatesSearch = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        radius: radius,
      };
      dispatch(findPharmacyByGeolocation(coordinates));
    });
  };

  const renderSearchByGeoLocation = () => {
    return (
      <div className="filter-panel-container">
        <Space align="center">
          Radio{" "}
          <InputNumber
            min={1}
            max={30}
            defaultValue={DEFAULT_RADIUS_VALUE}
            onChange={onChangeRadius}
          />{" "}
          Kms
          <Tooltip title="Buscar por distancia">
            <Button type="primary" onClick={onLocation}>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
            </Button>
          </Tooltip>
        </Space>
      </div>
    );
  };

  const renderSearchByLocality = () => {
    return (
      <div className="filter-panel-container">
        <Space align="center">
          <Search
            placeholder="Localidad de farmacia"
            allowClear
            enterButton="Buscar"
            style={{ width: 320 }}
            onSearch={onSearch}
          />
        </Space>
      </div>
    );
  };

  return (
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="Buscar por localidad" key="1">
        {renderSearchByLocality()}
      </TabPane>
      <TabPane tab="Buscar por ubicacion" key="2">
        {renderSearchByGeoLocation()}
      </TabPane>
    </Tabs>
  );
};

export default FilterPanel;
