const { Schema, model } = require("mongoose");

const bookmarkSchema = Schema(
    {
        references: {
            type: Schema.Types.ObjectId,
            refPath: "bookmark_type",
        },
        bookmark_type: {
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

module.exports = model("Bookmark", bookmarkSchema);
