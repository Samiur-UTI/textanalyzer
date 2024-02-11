// models/index.js or at the end of the model files
const User = require('./user.model');
const Profile = require('./profile.model');
const FileInfo = require('./file_info.model');

User.hasOne(Profile, { foreignKey: 'userId', as: 'profile' });
Profile.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(FileInfo, { foreignKey: 'userId', as: 'files' });
FileInfo.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Profile, FileInfo };
