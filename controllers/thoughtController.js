const { User, Thought } = require("../models");


// ********************* create crud commands to grab info *********************
const thoughtController = {
    // ********************* CRUD your User *********************
    // ********************* Reference the studentController *********************
    getThoughts(req, res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    getSingleThought(req, res){
        Thought.find({_id: req.params.thoughtId})
        .select("-__v")
        .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },

    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },


    updateThought(req, res){
        Thought.findOneAndUpdate({ _id: req.params.thoughtId},
          { $set: req.body })
        .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No thought with that Id' })
          : res.status(200).json('Thought has been updated')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    deleteThought(req, res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
        .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No thought with that Id' })
          : res.status(200).json('Thought has been deleted')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    addReaction(req, res){
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    deleteReaction(req, res){
      Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } },
      { runValidators: true, new: true }
      )
      .then((thought) =>
          !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json({ message: 'DELETED THE REACTION' })
      )
      .catch((err) => res.status(500).json(err));
    },
}


// ********************* exports *********************
module.exports = thoughtController;