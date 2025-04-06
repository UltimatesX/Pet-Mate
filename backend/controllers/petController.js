// server/controllers/petController.js
const Pet = require('../models/Pet');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getPets = asyncHandler(async (req, res, next) => {
  const pets = await Pet.find().populate('owner', 'name email');
  res.status(200).json({
    success: true,
    count: pets.length,
    data: pets
  });
});

exports.createPet = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse('Please upload an image', 400));
  }

  const petData = {
    ...req.body,
    imageUrl: `/uploads/${req.file.filename}`,
    owner: req.user.id // Assuming auth middleware
  };

  const pet = await Pet.create(petData);
  
  res.status(201).json({
    success: true,
    data: pet
  });
});

exports.getMatches = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findById(req.params.petId);
  if (!pet) {
    return next(new ErrorResponse('Pet not found', 404));
  }

  const matches = await Pet.find({
    _id: { $ne: req.params.petId },
    type: pet.type,
    owner: { $ne: pet.owner }
  })
    .sort({ age: pet.age })
    .limit(3)
    .populate('owner', 'name email');

  res.status(200).json({
    success: true,
    data: matches
  });
});