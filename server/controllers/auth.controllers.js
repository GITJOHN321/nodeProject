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
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //res.send("register")
    const [userFound] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound[0].password);

    if (!isMatch) return res.satus(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound[0].id_users });

    res.cookie("token", token);
    res.json({
      id: userFound[0].id_users,
      username: userFound[0].username,
      email: userFound[0].email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const logout = (req, res) => {
  res.cookie(
    "token",
    "",

    { expires: new Date(0) }
  );
  return res.sendStatus(204);
};
export const profile = async(req, res) =>{
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id_users = ?",[req.user.id])
    res.json({
      id: result[0].id_users,
      username: result[0].username,
      email: result[0].email
    })
  } catch (error) {
    return res.satus(400).json({ message: "ERROR" });
  }
}