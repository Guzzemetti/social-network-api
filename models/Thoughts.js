// ******************************************************* Require necessary packages in consts *******************************************************
// ******************************************************* Schema and Model *******************************************************
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");


// ******************************************************* Reference dateFormat *******************************************************
const dateFormat = require("../utils/dateFormat");


// ******************************************************* Create a new schema w/Tables/Columns *******************************************************
const thoughtSchema = new Schema(
    {
        thoughtPost: {
            
        },
        createdAt: {
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
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


// ******************************************************* Create a Model check assignments? *******************************************************



// ******************************************************* Reference the reaction schema *******************************************************


// ******************************************************* Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query. *******************************************************