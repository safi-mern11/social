import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    avatarUrl: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowecase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAccountPublic: {
        type: Boolean,
        default: true,
    }

}, { timestamps: ture });

export const User = mongoose.model("User", userSchema)
