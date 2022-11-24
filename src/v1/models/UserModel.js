const { Schema, model } = require("mongoose");

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        profile_picture: {
            type: String,
        },
        bio: {
            type: String,
        },
        job: {
            type: String,
        },
        education: {
            type: String,
        },
        location: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = model("User", userSchema);
