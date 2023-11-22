import jwt from "jsonwebtoken";

export const generateToken = (id, email, expiresIn) => {
    const JWT_SECRET = "cbjdwigueocmkqmpwmepijfiejwfo";
    const payload = {id: id, email: email};
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: expiresIn
    });
    return token;
}