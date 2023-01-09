import { Pharmacy } from "../../../models/pharmacy.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Avatar } from "antd";

import "./PharmacyDetail.scss";

const { Meta } = Card;

interface PharmacyProps {
  pharmacy: Pharmacy;
}

export const PharmacyDetail = ({ pharmacy }: PharmacyProps) => {
  const renderPharmacy: JSX.Element = (
    <div className="pharmacy-detail">
      <Card
        title={"Farmacia " + pharmacy.name}
        extra={
          <div className="pharmacy-distance">
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />{" "}
            {pharmacy.distance_km_from_origin.toFixed(2)} Kms
          </div>
        }
        actions={[
          <div className="pharmacy-phone">
            <FontAwesomeIcon icon={faPhone} /> {pharmacy.phone}
          </div>,
          <FontAwesomeIcon icon={faLocationDot} />,
        ]}
        //loading={true}
      >
        <Meta
          avatar={<Avatar>{pharmacy.name.charAt(0).toUpperCase()}</Avatar>}
          description={pharmacy.address.address}
        ></Meta>
      </Card>
    </div>
  );

  return <>{renderPharmacy}</>;
};
