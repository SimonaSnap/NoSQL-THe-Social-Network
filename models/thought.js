const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJson: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual("reationCount")
    .get(function ()
    {

    });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;