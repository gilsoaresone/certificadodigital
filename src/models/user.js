const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')





const userSchema = mongoose.Schema({

    _id: {
        type: 'object',
        value: { type: 'Buffer' },
        default: () => uuidv4(),
    },
    dataAgendada: {
        type: String,
        required: true,

    },
    nomeAgendador: {
        type: String,
        required: true
    },
    cpfAgendador: {
        type: String,
        required: true

    },
    nomeAgenteRegistroDesignado: {
        type: String,
        required: true

    },
    cpfAgenteRegistroDesignado: {
        type: String,
        required: true

    }

});

module.exports = mongoose.model('User', userSchema);