const mongoose = require('mongoose');


//esquema/estrutura do usuario
const BookingSchema = new mongoose.Schema({
   date: String,
   approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, // id
        ref: 'User' // referencia ao usuario
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);