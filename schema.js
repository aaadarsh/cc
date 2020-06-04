
const mongoose = require('mongoose');
const ccschema = mongoose.Schema({
           
     expMonth: {

        type: Number
        // required: true
    },

    expYear: {
        type: Number
        // required: true
    }

});

const item = module.exports = mongoose.model('item', ccschema);