import { PharmacyDetail } from "./pharmacy/PharmacyDetail";
import { Space } from "antd";
import { Pharmacy } from "../../models/pharmacy.model";

interface PharmacyListProps {
  loading: boolean;
  pharmacyList: Pharmacy[];
}

export const PharmacyList = (props: PharmacyListProps) => {
  const renderPharmacyList = () => {
    return props.pharmacyList.map((phar) => (
      <PharmacyDetail key={phar.id} pharmacy={phar} isLoading={false} />
    ));
  };

  return (
    <Space className="space-align-containers" wrap style={{ display: "flex" }}>
      {props.loading ? (
        <PharmacyDetail isLoading={true} />
      ) : props.pharmacyList?.length > 0 ? (
        renderPharmacyList()
      ) : (
        "Seleccione un filtro de busqueda"
      )}
    </Space>
  );
};
