const bootcampService = require("../services/bootcampService");

const getAllBootcamps = async (req, res) => {
  try {
    const { page, length, sort } = req.query;
    const allBootcamps = await bootcampService.getAllBootcamps(page, length, sort);
    res.send({ status: "OK", data: allBootcamps });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneBootcamp = (req, res) => {
  const {
    params: { bootcampId },
  } = req;
  if (!bootcampId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':bootcampId' can not be empty" },
      });
  }
  try {
    const bootcamp = bootcampService.getOneBootcamp(bootcampId);
    res.send({ status: "OK", data: bootcamp });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewBootcamp = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.description ||
    !body.website ||
    !body.phone ||
    !body.email ||
    !body.address
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'description', 'website', 'phone', 'email', 'address'",
        },
      });
    return;
  }
  const newBootcamp = {
    name: body.name,
    description: body.description,
    website: body.website,
    phone: body.phone,
    email: body.email,
    address: body.address,
  };
  try {
    const createdBootcamp = bootcampService.createNewBootcamp(newBootcamp);
    res.status(201).send({ status: "OK", data: createdBootcamp });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneBootcamp = (req, res) => {
  const {
    body,
    params: { bootcampId },
  } = req;
  if (!bootcampId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':bootcampId' can not be empty" },
      });
  }
  try {
    const updatedBootcamp = bootcampService.updateOneBootcamp(bootcampId, body);
    res.send({ status: "OK", data: updatedBootcamp });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneBootcamp = (req, res) => {
  const {
    params: { bootcampId },
  } = req;
  if (!bootcampId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':bootcampId' can not be empty" },
      });
  }
  try {
    bootcampService.deleteOneBootcamp(bootcampId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createNewBootcamp,
  updateOneBootcamp,
  deleteOneBootcamp,
};
