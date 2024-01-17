const { v4: uuid } = require("uuid");
const Bootcamp = require("../database/Bootcamp");

const getAllBootcamps = async (page, length, sort) => {
  try {
    const allBootcamps = await Bootcamp.getAllBootcamps();
    return paginate(sortBootcamps(allBootcamps, sort), length, page);
  } catch (error) {
    throw error;
  }
};

const getOneBootcamp = (bootcampId) => {
  try {
    const bootcamp = Bootcamp.getOneBootcamp(bootcampId);
    return bootcamp;
  } catch (error) {
    throw error;
  }
};

const createNewBootcamp = (newBootcamp) => {
  const bootcampToInsert = {
    ...newBootcamp,
    id: uuid(),
  };
  try {
    const createdBootcamp = Bootcamp.createNewBootcamp(bootcampToInsert);
    return createdBootcamp;
  } catch (error) {
    throw error;
  }
};

const updateOneBootcamp = (bootcampId, changes) => {
  try {
    const updatedBootcamp = Bootcamp.updateOneBootcamp(bootcampId, changes);
    return updatedBootcamp;
  } catch (error) {
    throw error;
  }
};

const deleteOneBootcamp = (bootcampId) => {
  try {
    Bootcamp.deleteOneBootcamp(bootcampId);
  } catch (error) {
    throw error;
  }
};

const paginate = (data, length = 10, page = 1) => {
  const startIndex = (page - 1) * length;
  const endIndex = startIndex + length;
  return data.slice(startIndex, endIndex);
};

const sortBootcamps = (data, sort) => {
  if (sort === "createdAt") {
    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return data;
};

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createNewBootcamp,
  updateOneBootcamp,
  deleteOneBootcamp,
};
