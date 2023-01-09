import { useEffect, useRef, useState } from "react";
import { getOpenPharmacy } from "../services/pharmacy.api";
import { Pharmacy } from "../models/pharmacy.model";

interface IState<T> {
  loading: boolean;
  data: T;
}

export const EMPTY_PHARMACY = [
  {
    id: "0",
    name: "em",
    phone: "+56",
    open_at: new Date(),
    close_at: new Date(),
    open_now: false,
    address: {
      address: "s/n",
      locality: "n/a",
      coordinates: {
        latitude: 1.234,
        longitude: 2.345,
      },
    },
    distance_km_from_origin: 1.13,
  },
];

export const useFetchPharmacy = () => {
  const isMounted = useRef(true);
  const [data, setData] = useState<IState<Pharmacy[]>>({
    loading: false,
    data: EMPTY_PHARMACY,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setData({ loading: true, data: EMPTY_PHARMACY });

    getOpenPharmacy(-33.482883, -70.760702, 15)
      .then((response) => {
        if (isMounted.current) setData({ loading: false, data: response });
      })
      .catch(() => {
        setData({ loading: false, data: EMPTY_PHARMACY });
      });
  }, []);

  return { ...data };
};
