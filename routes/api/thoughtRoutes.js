const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaciton
} = require("../../controllers/thoughtController");



router.route('/').get(getThoughts)

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaciton);

router.route('/:thoughtId/reactions/').put(addReaction);


module.exports = router;