const passport = require('passport');

const DoctorReference = require('../models/DoctorSchema');

const JwtStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;

let opt = { 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey: 'EncryptionKey'
};

passport.use(new JwtStrategy(opt,function(jwtPayload,done){
    DoctorReference.findById(jwtPayload._id,function(error,user){
        if(error){
            return done(error,false);
        }
        if(user){
            return done(null,user);
        }
        return done(null,false);
    })
}));

module.exports = passport;