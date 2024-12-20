const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService {
    async createUser(userData) {
        try {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const user = new User({
                ...userData,
                password: hashedPassword
            });
            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    async findUserByEmail(email) {
        return await User.findOne({ email });
    }

    async updateUser(userId, updateData) {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }

    generateToken(userId) {
        return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
    }
}

module.exports = new UserService();
