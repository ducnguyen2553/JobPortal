const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcryptjs")

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["jobseeker", "employer"],
        required: true
    },
    avatar: String,
    resume: String,

    //for employer
    companyName: String,
    companyDescription: String,
    companyLogo: String
}, { timestamps: true });

//encrypt 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//
userSchema.methods.matchPassword = function (enterPassword) {
    return bcrypt.compare(enterPassword, this.password);
};

//Export the model
module.exports = mongoose.model('User', userSchema);