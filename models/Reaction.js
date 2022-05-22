const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Typs.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            max: [280],
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            // date it was created
            // set default value to the current time
            // format timestamp
        }
    }
);







const Reactions = model('reactions', reactionSchema);

module.exports = Reactions;