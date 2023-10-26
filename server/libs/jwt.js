import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

//Cuando llamamos esta función debemos hacerlo de forma asincrona
//const token = await function name(payload)
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, //payload = query.id
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        // res.json({ token });
        //res.cookie("token", token);
        resolve(token);
      }
    );
  });
}
