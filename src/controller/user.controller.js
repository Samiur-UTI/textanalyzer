const { createUser, authenticateUser, generateToken } = require('../service/user.service');

const signup = async (req, res) => {
    try {
        const { email, password, firstName, lastName, phoneNumber } = req.body;
        await createUser(email, password, firstName, lastName, phoneNumber);
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authenticateUser(email, password);

        if (!user) {
            return res.status(401).send({ message: 'Authentication failed' });
        }

        const token = generateToken(user.id);
        res.status(200).send({ token: token });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in', error: error.message });
    }
};

module.exports = { signup, login };
