import School, { SchoolModel } from "../models/schoo.model";

const createSchool = async (schoolDetails: SchoolModel) => {
  const school = new School(schoolDetails);

  await school.save();

  return school;
};

const getAllSchools = async () => {
  return School.find({});
};

const getSchoolWithId = async (reqSchoolId: string) => {
  const query = { _id: reqSchoolId };
  return School.findOne(query);
};

const getSchoolWithName = async (reqSchoolName: string) => {
  const query = { english_name: reqSchoolName };
  return School.findOne(query);
};

const updateSchoolWithId = async (
  reqSchoolId: string,
  schoolNewDetails: SchoolModel
) => {
  const query = { _id: reqSchoolId };
  const updatedSchool = await School.findOneAndUpdate(query, schoolNewDetails, {
    upsert: true,
  });
  return updatedSchool;
};

const updateSchool = async () => {
  // TODO: Implement
  return;
};

const deleteSchool = async () => {
  // TODO: Implement
  return;
};

const schoolService = {
  createSchool,
  getAllSchools,
  getSchoolWithId,
  getSchoolWithName,
  updateSchoolWithId,
  updateSchool,
  deleteSchool,
};

export default schoolService;
