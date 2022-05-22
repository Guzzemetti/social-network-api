const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
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
      type: Schema.Types.ObjectId,
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
userSchema.virtual("friendsList").get(function(){
  return friends.length;
});




const Student = model('student', studentSchema);

module.exports = Student;