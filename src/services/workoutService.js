const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = (equipment, length, page, sort) => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    if (equipment) {
      // Filter workouts based on equipment
      const filteredWorkouts = allWorkouts.filter((workout) =>
        workout.equipment.includes(equipment)
      );
      return paginate(sortWorkouts(filteredWorkouts, sort), length, page);
    }

    return paginate(sortWorkouts(allWorkouts, sort), length, page);
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

const paginate = (data, length = 10, page = 1) => {
  const startIndex = (page - 1) * length;
  const endIndex = startIndex + length;
  return data.slice(startIndex, endIndex);
};

const sortWorkouts = (data, sort) => {
  if (sort === "createdAt") {
    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return data;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
