const { Schema, model } = require("mongoose");

const answerSchema = Schema(
    {
        question: {
            type: Schema.Types.ObjectId,
            ref: "Question",
        },
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = model("Answer", answerSchema);
