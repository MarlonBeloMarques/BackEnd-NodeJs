const mongoose = require('mongoose');


//esquema/estrutura do usuario
const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);