import User from "../models/users.js";

export const createUser = async (req, res) => {
  try {
    const response = await User(req.body).save();
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ message: "Failed!" });
  }
};
