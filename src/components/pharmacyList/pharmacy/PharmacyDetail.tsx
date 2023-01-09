import { Pharmacy } from "../../../models/pharmacy.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";

import "./PharmacyDetail.scss";

interface PharmacyProps {
  pharmacy: Pharmacy;
}

export const PharmacyDetail = ({ pharmacy }: PharmacyProps) => {
  const renderPharmacy: JSX.Element = (
    <div className="pharmacy-detail">
      <Row>
        <Col span={20}>
          <div className="pharmacy-name">Farmacia {pharmacy.name}</div>
        </Col>
        <Col span={4}>
          <div className="pharmacy-distance">
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />{" "}
            {pharmacy.distance_km_from_origin.toFixed(2)} Kms
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={20}>
          <div className="pharmacy-address">{pharmacy.address.address}</div>
        </Col>
        <Col span={4}>
          <div className="pharmacy-pin">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </Col>
      </Row>

      <div className="pharmacy-phone">
        {" "}
        <FontAwesomeIcon icon={faPhone} /> {pharmacy.phone}
      </div>
    </div>
  );

  return <>{renderPharmacy}</>;
};
