const mongoose = require('mongoose');

const Schema  = mongoose.Schema({
    email: {
        type : String,
        required : true,
    },
    password : {
        type : String ,
        required : true,
    },
    name : {
        type : String,
        required : true,
    }
});

const CollectionReference = mongoose.model('DoctorDetails',Schema);

module.exports = CollectionReference;