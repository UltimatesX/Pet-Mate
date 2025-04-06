// server/models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pet name is required'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  type: {
    type: String,
    required: true,
    enum: ['dog', 'cat']
  },
  breed: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: [0, 'Age cannot be negative']
  },
  bio: {
    type: String,
    required: true,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  imageUrl: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pet', petSchema);