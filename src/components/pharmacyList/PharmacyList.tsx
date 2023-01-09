import { Pharmacy } from "../../models/pharmacy.model";
import { PharmacyDetail } from "./pharmacy/PharmacyDetail";
import { Space } from "antd";

interface PharmacyListProps {
  pharmacyList: Pharmacy[];
}

export const PharmacyList = ({ pharmacyList }: PharmacyListProps) => {
  const renderPharmacyList = () => {
    return pharmacyList.map((phar) => <PharmacyDetail pharmacy={phar} />);
  };

  return (
    <Space className="space-align-containers" wrap>
      {renderPharmacyList()}
    </Space>
  );
};
