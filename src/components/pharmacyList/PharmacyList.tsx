import { Pharmacy } from "../../models/pharmacy.model";
import { PharmacyDetail } from "./pharmacy/PharmacyDetail";

interface PharmacyListProps {
  pharmacyList: Pharmacy[];
}

export const PharmacyList = ({ pharmacyList }: PharmacyListProps) => {
  const renderPharmacyList = () => {
    return pharmacyList.map((phar) => <PharmacyDetail pharmacy={phar} />);
  };

  return <div className="space-align-containers">{renderPharmacyList()}</div>;
};
