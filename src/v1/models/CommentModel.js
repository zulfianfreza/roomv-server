const { Shcema, model, Schema } = require("mongoose");

const commentSchema = Schema(
    {
        content: {
            type: String,
            required: true,
        },
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

module.exports = model("Comment", commentSchema);
