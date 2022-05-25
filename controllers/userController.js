const { User, Thought } = require("../models");


const userTotal = async () =>
    User.aggregate()
    .count("userCount")
    .then((totalUsers) => totalUsers)


// ********************* create crud commands to grab info *********************
const userController = {
    // ********************* CRUD your User *********************
    // ********************* Reference the studentController *********************

    // Get all users and display the total number of users
    getUsers(req, res){
        User.find()
        .then(async (users) => {
            const userObj = {
                users,
                userTotal: await userTotal(),
            };
            return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    getSingleUser(req, res){
        User.find({_id: req.params.userId})
        .select("-__v")
        .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },

    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },


    updateUser(req, res){
        User.findOneAndUpdate({ _id: req.params.userId})
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that Id' })
          : res.status(200).json('User has been updated')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId})
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that Id' })
          : res.status(200).json('User has been deleted')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    addFriend(req, res){
      User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
      )
      .then((user) =>
          !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res){
        
    },
}


// ********************* exports *********************
module.exports = userController;