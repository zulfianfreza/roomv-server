const { model, Schema } = require("mongoose");

const threadSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
        },
        content: {
            type: String,
            required: true,
        },
        space: {
            type: Schema.Types.ObjectId,
            ref: "Space",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = model("Thread", threadSchema);
