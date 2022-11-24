const { Shcema, model, Schema } = require("mongoose");

const questionSchema = Schema(
    {
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { timestamps: true }
);

module.exports = model("Question", questionSchema);
