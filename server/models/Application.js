const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    resume: { type: String },
    status: {
        type: String,
        enum: ["Applied", "In Review", "Rejected", "Accepted"],
        default: "Applied",
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Application', applicationSchema);
//quản lý hồ sơ