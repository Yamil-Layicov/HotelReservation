import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

  try { 
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err) 
  }
}

export const updateUser = async (req, res, next) => {
  const updateUser = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  try {
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
}

export const deleteUser = async (req, res, next) => {
  
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has beem deleted")
  } catch (error) {
    next(error);
  }
}

export const getUser = async (req, res, next) => {
  const user = await User.findById(
    req.params.id
  );

  try {
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error)
  }
}