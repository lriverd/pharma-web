import { Pharmacy } from "../../../models/pharmacy.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Avatar, Modal } from "antd";

import "./PharmacyDetail.scss";
import MapContainer from "../../map/MapContainer";

const { Meta } = Card;

interface PharmacyProps {
  pharmacy?: Pharmacy;
  isLoading: boolean;
}

export const PharmacyDetail = ({ pharmacy, isLoading }: PharmacyProps) => {
  const renderModalI = () => {
    Modal.info({
      title: "Ubicación de Farmacia " + pharmacy?.name,
      content: (
        <div>{pharmacy ? <MapContainer pharmacy={pharmacy} /> : ""}</div>
      ),
      onOk() {},
    });
  };

  const renderPharmacy: JSX.Element = (
    <div className="pharmacy-detail">
      <Card
        title={"Farmacia " + pharmacy?.name}
        extra={
          <div className="pharmacy-distance">
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
            {" " + pharmacy?.distance_km_from_origin.toFixed(2)} Kms
          </div>
        }
        actions={[
          <div className="pharmacy-phone">
            <FontAwesomeIcon icon={faPhone} /> + {" " + pharmacy?.phone}
          </div>,
          <FontAwesomeIcon icon={faLocationDot} onClick={renderModalI} />,
        ]}
        loading={isLoading}
      >
        <Meta
          avatar={<Avatar>{pharmacy?.name.charAt(0).toUpperCase()}</Avatar>}
          description={pharmacy?.address.address}
        ></Meta>
      </Card>
    </div>
  );

  const renderLoadingCard: JSX.Element = (
    <div className="pharmacy-detail">
      <Card
        title={"Buscando . . . "}
        extra={
          <div className="pharmacy-distance">
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />0 Kms
          </div>
        }
        actions={[
          <div className="pharmacy-phone">
            <FontAwesomeIcon icon={faPhone} />
          </div>,
          <FontAwesomeIcon icon={faLocationDot} />,
        ]}
        loading={isLoading}
      ></Card>
    </div>
  );

  return <>{isLoading ? renderLoadingCard : renderPharmacy}</>;
};
