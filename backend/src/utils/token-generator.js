import jwt from "jsonwebtoken";

export const generateToken = (id, email, expiresIn) => {
    const payload = {id: id, email: email};
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: expiresIn
    });
    return token;
}