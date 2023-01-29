import { Pharmacy } from "../../../models/pharmacy.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../../utils/strings";
import { Card, Avatar, Modal, Tag } from "antd";

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
            Farmacia {pharmacy?.name && capitalizeFirstLetter(pharmacy?.name)}
          </>
        }
        extra={
          pharmacy?.distance_km_from_origin && (
            <div className="pharmacy-distance">
              <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
              {pharmacy?.distance_km_from_origin.toFixed(2)} Kms
            </div>
          )
        }
        actions={[
          <div className="pharmacy-phone">
            <FontAwesomeIcon icon={faPhone} /> {pharmacy?.phone}
          </div>,
          <FontAwesomeIcon icon={faLocationDot} onClick={renderMapModal} />,
          pharmacy?.distance_km_from_origin && (
            <div className="pharmacy-distance">
              <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
              {pharmacy?.distance_km_from_origin.toFixed(2)} Kms
            </div>
          ),
        ]}
        loading={isLoading}
      >
        <Meta description={pharmacy?.address.address}></Meta>
        <Meta description={pharmacy?.address.locality}></Meta>
        <Tag color="success">De turno</Tag>
        {pharmacy?.open_now ? (
          <Tag color="success">Abierta</Tag>
        ) : (
          <Tag color="error">Cerrada</Tag>
        )}
      </Card>
    </div>
  );

  return <>{renderPharmacy}</>;
};
