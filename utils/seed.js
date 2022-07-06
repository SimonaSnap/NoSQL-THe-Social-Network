const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, getRandomEmail, getRandomText } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () =>
{
    console.log("connection successful");

    await User.deleteMany({});

    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];

    for (let i = 0; i < 5; i++)
    {
        users.push({
            thoughtText: getRandomText(),
            username: getRandomName(),
        });
    }

    await Thought.collection.insertMany(thoughts);

    thoughts.forEach((thought) =>
    {
        users.push({
            username: thought.username,
            email: getRandomEmail(),
            thoughts: [thought._id],
        });
    });

    await User.collection.insertMany(users);

    console.table(users);
    console.info("seeds complete");
    process.exit(0);
});
