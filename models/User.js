const mongoose = require('mongoose');

/*

  TODO: Fill in the model specification

 */
const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  profile_img_url: {
    type: String
  },
  success_problems: [{
    problem_id: String,
    written_code: String,
    updated_at: Date
  }]
}, {
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('User', userSchema);
