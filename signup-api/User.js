// IMPORTS ------------------------------------------
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// --------------------------------------------------


// SCHEMA -------------------------------------------
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imageURL: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
});
// --------------------------------------------------

const User = model("User", UserSchema);

export default User;