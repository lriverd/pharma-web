import { Input, Button, Space, Tooltip, InputNumber, Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { CoordinatesSearch } from "../../models/coordinates.model";

import "./FilterPanel.scss";
import { useState } from "react";

const { Search } = Input;

const DEFAULT_RADIUS_VALUE: number = 10;

export interface FilterProps {
  loading: boolean;
  findPharmacyByLocality: (value: string) => void;
  findPharmacyByGeolocation: (coordinates: CoordinatesSearch) => void;
}

const FilterPanel = (props: FilterProps) => {
  const [radius, setRadius] = useState<number>(DEFAULT_RADIUS_VALUE);

  const onSearch = (value: string) => {
    props.findPharmacyByLocality(value);
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
      props.findPharmacyByGeolocation(coordinates);
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
            <Button
              type="primary"
              onClick={onLocation}
              disabled={props.loading}
            >
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
            disabled={props.loading}
          />
        </Space>
      </div>
    );
  };

  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      items={[
        {
          label: "Buscar por localidad",
          key: "1",
          children: renderSearchByLocality(),
        },
        {
          label: "Buscar por ubicación",
          key: "2",
          children: renderSearchByGeoLocation(),
        },
      ]}
    />
  );
};

export default FilterPanel;
