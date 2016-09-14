var mongoose = require('mongoose');

// Create the GramSchema.
var GramSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('gram', GramSchema);