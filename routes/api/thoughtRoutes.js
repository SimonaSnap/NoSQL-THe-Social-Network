const router = require("express").Router();

const {
    deleteThought,
    updateThought,
    getAllThoughts,
    getThoughtById,
    createThought,
    // removeReaction,
    // addReaction
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getThoughtById).delete(deleteThought).put(updateThought);

//router.route("/:thoughtId/reactions").post(addReaction)

//router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;