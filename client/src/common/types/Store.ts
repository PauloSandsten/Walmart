import { Address, OperationalHours, Service } from ".";

export type Store = {
  id: number;
  distance?: number;
  displayName?: string;
  detailsPageUrl?: string;
  address?: Address;
  phone?: string;
  openNow?: boolean | null;
  openDate?: string | null;
  operationalHours?: OperationalHours;
  allServices?: Array<Service>;
  services?: Array<Service>;
  nearbyStores?: Array<Store>;
};
