const { Schema, model } = require("mongoose");

const spaceSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        icon: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        admin: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        moderator: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        contributor: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    { timestamps: true }
);

module.exports = model("Space", spaceSchema);
