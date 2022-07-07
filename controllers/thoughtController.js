const { User, Thought } = require("../models");

module.exports = {

    deleteThought(req, res)
    {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => !thought
                ? res.status(400).json({ message: "No Thought at this id" })
                : res.json({ message: "GoodBye Thought" })
            ).catch((err) =>
                res.status(500).json(err))
    },

    updateThought(req, res)
    {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true })
            .then((thought) => !thought
                ? res.status(400).json({ message: "No Thought at this id" })
                : res.json(thought)
            ).catch((err) =>
                res.status(500).json(err))
    },

    getAllThoughts(req, res)
    {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) =>
                res.status(500).json(err))
    },

    getThoughtById(req, res)
    {
        Thought.findOne({ _id: req.params.thoughtId })
            .then(async (thought) => !thought
                ? res.status(400).json({ message: "No Thought at this id" })
                : res.json(thought)
            ).catch((err) => res.status(500).json(err));
    },

    createThought(req, res)
    {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) =>
                res.status(500).json(err));
    }
    // removeReaction,
    // addReaction
};