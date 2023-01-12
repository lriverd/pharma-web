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
  const renderMapModal = () => {
    Modal.info({
      title: "Ubicación de Farmacia " + pharmacy?.name,
      content: (
        <div>
          {pharmacy ? (
            <MapContainer pharmacy={pharmacy} />
          ) : (
            "No se encontró farmacia"
          )}
        </div>
      ),
      onOk() {},
      width: 500,
    });
  };

  const renderPharmacy: JSX.Element = (
    <div className="pharmacy-detail">
      <Card
        title={
          <>
            <Avatar>{pharmacy?.name.charAt(0).toUpperCase()}</Avatar>
            Farmacia {pharmacy?.name}
          </>
        }
        extra={
          <div className="pharmacy-distance">
            <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
            {pharmacy?.distance_km_from_origin.toFixed(2)} Kms
          </div>
        }
        actions={[
          <div className="pharmacy-phone">
            <FontAwesomeIcon icon={faPhone} /> {pharmacy?.phone}
          </div>,
          <FontAwesomeIcon icon={faLocationDot} onClick={renderMapModal} />,
        ]}
        loading={isLoading}
      >
        <Meta description={pharmacy?.address.address}></Meta>
        <Meta description={pharmacy?.address.locality}></Meta>
      </Card>
    </div>
  );

  return <>{renderPharmacy}</>;
};
