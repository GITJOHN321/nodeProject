import { pool } from "../db.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //res.send("register")
    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users(username,email,password) VALUES(?,?,?)",
      [username, email, passwordHash]
    );

    const token = await createAccessToken({ id: result.insertId });
    res.cookie("token", token);
    res.json({
      id: result.insertId,
      username,
      email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const login = (req, res) => {
  console.log("login");
};
