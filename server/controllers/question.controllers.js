import { pool } from "../db.js";

export const getQuestions = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM questions WHERE id_users = ?  ORDER BY createdAt ASC",
      [req.user.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getQuestion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM questions WHERE id_question = ?",
      [req.params.id]
    );
    const [result_answer] = await pool.query(
      "SELECT * FROM answers WHERE question_id = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "task not found" });
    }
    //agrega la propiedad answers al json de question
    result[0].answers = [result_answer][0]
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createQuestion = async (req, res) => {
  try {
    const id = req.user.id;
    const { title, body } = req.body;
    console.log(req.body);
    const [result] = await pool.query(
      "INSERT INTO questions(title, body, id_users) VALUES (?,?,?)",
      [title, body, id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateQuestion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE questions SET ? WHERE id_question = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteQuestion = async (req, res) => {
  try {
    const delete_answer = await pool.query(
      "DELETE FROM answers WHERE question_id = ?",
      [req.params.id]
    );
    const [result] = await pool.query(
      "DELETE FROM questions WHERE id_question = ?",
      [req.params.id]
    );
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
