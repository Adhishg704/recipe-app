import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect("mongodb+srv://adhishg704:y7BRXvjDe4tStdou@cluster0.hsvwzux.mongodb.net/RecipeAppMERN?");
    } catch (error) {
        console.log(error);
        throw new Error("Could not connect to database");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from database");
    }
}

export { connectToDatabase, disconnectFromDatabase };