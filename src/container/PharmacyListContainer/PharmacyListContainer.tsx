import { connect } from "react-redux";
import { PharmacyList } from "../../components/pharmacyList/PharmacyList";
import { Pharmacy } from "../../models/pharmacy.model";
import { RootState } from "../../store/store";

interface PropsFromStore {
  loading: boolean;
  pharmacyList: Pharmacy[];
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
  return {
    loading: appState.pharmacyList.loading,
    pharmacyList: appState.pharmacyList.pharmacyList,
  };
};

export const PharmacyListContainer = connect<PropsFromStore, {}, {}, RootState>(
  mapStateToProps
)(PharmacyList);
