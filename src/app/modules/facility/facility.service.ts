import { TFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDB = async (facilityData: TFacility) => {
  // create a facility
  const newFacility = await FacilityModel.create(facilityData);
  return newFacility;
};

export const FacilityServices = {
  createFacilityIntoDB,
};
