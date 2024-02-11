const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Profile } = require('../model'); 

const createUser = async (email, password, firstName, lastName, phoneNumber) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email: email, password: hashedPassword });
    await Profile.create({ firstName, lastName, phoneNumber, userId: user.id });

    return user;
};

const authenticateUser = async (email, password) => {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }

    return user;
};

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { createUser, authenticateUser, generateToken };
