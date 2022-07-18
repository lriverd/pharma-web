import { Pharmacy } from "../../../models/pharmacy.model"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons'

import './PharmacyDetail.scss'

interface PharmacyProps{
    pharmacy: Pharmacy;
}

export const PharmacyDetail = ({pharmacy}: PharmacyProps) => {
    const renderPharmacy:JSX.Element =  (
            <div className="pharmacy-detail">
                <div className="pharmacy-name">Farmacia {pharmacy.name}</div>
                <div className="pharmacy-address">{pharmacy.address.address}</div>
                <div className="pharmacy-phone"> <FontAwesomeIcon icon={faPhone} /> {pharmacy.phone}</div>
                <div className="pharmacy-distance"><FontAwesomeIcon icon={faPersonWalkingArrowRight} /> {pharmacy.distance_km_from_origin} Kms</div>
                <div className="pharmacy-pin"><FontAwesomeIcon icon={faLocationDot} /></div>
            </div>
        );
    

    return(
        <>
            {renderPharmacy}
        </>
    );
}