import { Pharmacy } from "../../../models/pharmacy.model"

interface PharmacyProps{
    pharmacy: Pharmacy;
}

export const PharmacyDetail = ({pharmacy}: PharmacyProps) => {
    const renderPharmacy = () =>{
        return (
            <div>
                <h2>{pharmacy.name}</h2>
                <h1>{pharmacy.distance_km_from_origin} Kms</h1>
                <h3>{pharmacy.adress}</h3>
            </div>
        );
    }

    return(
        <>
            {renderPharmacy()}
        </>
    );
}