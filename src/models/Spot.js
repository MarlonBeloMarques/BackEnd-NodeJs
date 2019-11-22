const mongoose = require('mongoose');


//esquema/estrutura do usuario
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, // id
        ref: 'User' // referencia ao usuario
    }
});

module.exports = mongoose.model('Spot', SpotSchema);