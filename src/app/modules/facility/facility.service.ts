import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TFacility } from "./facility.interface";
import { FacilityModel } from "./facility.model";

const createFacilityIntoDB = async (facilityData: TFacility) => {
  // create a facility
  const newFacility = await FacilityModel.create(facilityData);
  return newFacility;
};

const updateAFacilityIntoDB = async (
  id: string,
  payload: Partial<TFacility>
) => {
  // const session = await mongoose.startSession();

  try {
    // session.startTransaction();

    //step1: basic course info update
    const updatedBasicCourseInfo = await FacilityModel.findByIdAndUpdate(id, {
      new: true,
      runValidators: true,
    });

    if (!updatedBasicCourseInfo) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Failed to update the Facility"
      );
    }
  } catch (err) {
    console.log(err);
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to update the Facility");
  }
};

const deleteFacilityFromDB = async (id: string) => {
  const result = await FacilityModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

const getAllFacilitiessFromDB = async (query: Record<string, unknown>) => {
  // const courseQuery = new QueryBuilder(
  //   FacilityModel.find(),
  //   // .populate('preRequisiteCourses.course'),
  //   query
  // )
  //   .search(CourseSearchableFields)
  //   .filter()
  //   .sort()
  //   .paginate()
  //   .fields();

  const result = await FacilityModel.find();
  return result;
};

export const FacilityServices = {
  createFacilityIntoDB,
  updateAFacilityIntoDB,
  deleteFacilityFromDB,
  getAllFacilitiessFromDB,
};
