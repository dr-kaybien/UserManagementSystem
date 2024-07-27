const User = require("../model/user.model")

module.exports = {
    signup: async (req, res) => {
        try {
            const user = req.body;
            const newUser = new User(user);
            newUser.save();
            res.json({
                data: newUser
            })
        } catch (error) {
            console.log("Error:", error);
            res.status(500).json({error});
        }
    },
update: async (req, res, next) => {
        try {
            const data = req.body;
            const id = req.params.id;
            const user = await User.findByIdAndUpdate(id, data);
            res.status(200).json({
                data: user,
                message: "User updated"
            })
        } catch (error) {
            next(error);
            console.log("Error:", error)
        }
    },
fetchAllUsers: async (req, res, next)=>{
        try {
            const users = await User.find({});
            res.status(200).json({
                data: users
            })
        } catch (error) {
            next(error)
        }
    },
fetchUserById: async (req, res, next)=>{
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            if(!user) return next(new Error("User not found"))
            res.status(200).json({
                data: user
            })
        } catch (error) {
            next(error)
        }
    },
deleteUser: async (req, res, next) => {
    try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: 'User has been deleted'
    });
    } catch (error) {
    next(error)
    }
}
}
