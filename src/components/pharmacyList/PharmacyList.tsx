import { PharmacyDetail } from "./pharmacy/PharmacyDetail";
import { Space } from "antd";
import { useAppSelector } from "../../store/hooks";

import { selectPharmacyList } from "../../modules/pharmacyModule";

export const PharmacyList = () => {
  const pharmacyList = useAppSelector(selectPharmacyList);
  const renderPharmacyList = () => {
    return pharmacyList.pharmacyList.map((phar) => (
      <PharmacyDetail pharmacy={phar} isLoading={false} />
    ));
  };

  return (
    <Space className="space-align-containers" wrap style={{ display: "flex" }}>
      {pharmacyList.loading ? (
        <PharmacyDetail isLoading={true} />
      ) : pharmacyList.pharmacyList?.length > 0 ? (
        renderPharmacyList()
      ) : (
        "Seleccione un filtro de busqueda"
      )}
    </Space>
  );
};
