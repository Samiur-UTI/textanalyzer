require('dotenv').config();
const sequelize = require('./config/database');
const { User, Profile, FileInfo } = require('./model');

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
});
