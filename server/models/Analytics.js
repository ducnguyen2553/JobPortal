const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var analyticsSchema = new mongoose.Schema({
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalJobsPosted: {
        type: Number,
        default: 0
    },
    totalApplicationsReceived: {
        type: Number,
        default: 0
    },
    totalHired: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Analytics', analyticsSchema);