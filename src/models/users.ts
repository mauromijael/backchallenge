import mongoose from "mongoose";

export interface iUser extends mongoose.Document {
    username: string,
    email: string,
    password: string,
    lastLogin: Date,
    role: string,
    active: boolean,
    firstName: string,
    lastName: string,
    birthday: Date
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    lastLogin: {
        type: Date
    },
    role: {
        type: String
    },
    active: {
        type: Boolean
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
});

const User = mongoose.model<iUser>("users", UserSchema);
export default User;