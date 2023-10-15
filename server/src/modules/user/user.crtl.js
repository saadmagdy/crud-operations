import User from "../../models/User.js";
import asyncHandeler from "./../../utils/asyncHandeler.js";

export const getAllUsers = asyncHandeler(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json(users);
});
export const addUser = asyncHandeler(async (req, res, next) => {
  const newUsers = new User(req.body);
  await newUsers.save();
  res.status(200).json(newUsers);
});
export const getOneUser = asyncHandeler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
});
export const updateUser = asyncHandeler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json(user);
});
export const deleteUser = asyncHandeler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.status(200).json(user);
});
