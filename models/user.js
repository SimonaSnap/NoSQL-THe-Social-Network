const { Schema, model } = require("mongoose");
const friendCount = require("./friends");

//Schema for the User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validator: {
                $jsonSchema: {
                    email: { $regex: /@mongodb\.com$/ },
                },
            },
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
        toJson: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function ()
    {

    });

const User = model("user", userSchema);
