const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var savedJobSchema = new mongoose.Schema({
    jobseeker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },

}, { timestamps: true });

//Export the model
module.exports = mongoose.model('SavedJob', savedJobSchema);