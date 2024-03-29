const { Schema, model } = require("mongoose");
const formateDate = require("../utils/date");
const moment = require("moment");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format("MMM DD, YYY [at] hh:mm a"),
    }
},
    {
        toJson: {
            getters: true,
        },
    });

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
            get: (timestamp) => moment(timestamp).format("MMM DD, YYY [at] hh:mm a"),
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
    .virtual("reactionCount")
    .get(function ()
    {
        return this.rections.length;
    });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;