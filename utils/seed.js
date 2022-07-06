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

    for (let i = 0; i < 5; i++)
    {
        const usernames = getRandomName(5);
        const emails = getRandomEmails(5);

        users.push({
            usernames,
            emails,
        });
    }

    console.table(users);
    console.info("seeds complete");
    process.exit(0);
});
