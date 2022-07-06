const Schema1 = require("../models/model");
const CatchErrorAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");

exports.getAllData = CatchErrorAsync(async (req, res) => {
  const data = await Schema1.find();
  if (!data) return next(new AppError("DB is empty", 404));
  res.status(200).json({
    status: "Success",
    data: { data },
  });
});

exports.getDataById = CatchErrorAsync(async (req, res) => {
  const data = await Schema1.findById(req.query.id);
  if (!data) return next(new AppError("DB is empty", 404));
  res.status(200).json({
    status: "Success",
    data: { data },
  });
});

exports.createData = CatchErrorAsync(async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };
  const user = await Schema1.create(data);
  res.status(200).json({
    status: "Success",
    data: { user },
  });
});

exports.updateData = CatchErrorAsync(async (req, res) => {
  const user = await Schema1.findById(req.query.id);
  const data = {
    name: req.body.name || user.name,
    email: req.body.email || user.email,
    password: req.body.password || user.password,
    passwordConfirm: req.body.passwordConfirm || user.passwordConfirm,
  };
  const updateUser = await Schema1.findByIdAndUpdate(req.query.id, data);
  res.status(202).json({
    status: "Success",
    data: { updateUser },
  });
});

exports.deleteData = CatchErrorAsync(async (req, res) => {
  await Schema1.findByIdAndDelete({ _id: req.query.id });
  res.status(204).json({});
});
