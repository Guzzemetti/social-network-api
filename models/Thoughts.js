const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
        thoughtPost: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 250,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            // get: timestamp => dateFormat(timestamp)
            type: Date,
            default: Date.now,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)


// ******************************************************* Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query. *******************************************************
thoughtSchema.virtual("reactionCount").get(function(){
    return reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;