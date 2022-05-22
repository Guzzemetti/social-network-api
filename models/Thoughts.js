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