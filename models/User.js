const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    thoughts: {
      type: Schema.Typs.ObjectId,
      ref: "Thought",
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// ********************* Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query. *********************

const Student = model('student', studentSchema);

module.exports = Student;