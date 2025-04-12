const User = require('../../model/use');

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json({
                message: "success",
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                error: error.message
            });
        }
    }
}

module.exports = UserController;    
