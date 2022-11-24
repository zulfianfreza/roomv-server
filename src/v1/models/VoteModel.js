const { Schema, model } = require("mongoose");

const voteSchema = Schema(
    {
        vote: {
            type: String,
            enum: ["up", "down"],
        },
        references: {
            type: Schema.Types.ObjectId,
            refPath: "vote_type",
        },
        vote_type: {
            type: String,
            enum: ["Thread", "Question"],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = model("Vote", voteSchema);
