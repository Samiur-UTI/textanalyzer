// models/file_info.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FileInfo = sequelize.define('FileInfo', {
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = FileInfo;
