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
        .then(async (student) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    }

    createUser(req, res){

    }


    updateUser(req, res){
        
    }

    deleteUser(req, res){
        
    }

    addFriend(req, res){
        
    }

    removeFriend(req, res){
        
    }
}


// ********************* exports *********************
module.exports = userController;