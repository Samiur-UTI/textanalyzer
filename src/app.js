require('dotenv').config();
const sequelize = require('./config/database');
const { User, Profile, FileInfo } = require('./model');
const userRoutes = require("./routes/user.routes")
const express = require('express');
if (process.env.NODE_ENV !== 'test') {
    sequelize.sync({ force: true })
        .then(() => {
            console.log('Database & tables created!');
        });
}

const app = express();
app.use(express.json());

// Use user routes
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;