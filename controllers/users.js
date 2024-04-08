import User from "../models/users.js";

export const createUser = async (req, res) => {
  try {
    const res = await User(req.body).save();
    res.json(res);
  } catch (e) {
    res.status(400).json({ message: "Failed!" });
  }
};
