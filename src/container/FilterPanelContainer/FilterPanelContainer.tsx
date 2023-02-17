import { connect } from "react-redux";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { CoordinatesSearch } from "../../models/coordinates.model";
import {
  findPharmacyByLocality,
  findPharmacyByGeolocation,
} from "../../slices/pharmacyListSlice";
import { AppDispatch, RootState } from "../../store/store";

interface PropsFromStore {
  loading: boolean;
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
  return {
    loading: appState.pharmacyList.loading,
  };
};

interface DispatchFromProps {
  findPharmacyByLocality: (value: string) => void;
  findPharmacyByGeolocation: (coordinates: CoordinatesSearch) => void;
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchFromProps => {
  return {
    findPharmacyByLocality: (value: string) =>
      dispatch(findPharmacyByLocality(value)),
    findPharmacyByGeolocation: (coordinates: CoordinatesSearch) =>
      dispatch(findPharmacyByGeolocation(coordinates)),
  };
};

export const FilterPanelContainer = connect<
  PropsFromStore,
  DispatchFromProps,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);

export default FilterPanelContainer;
