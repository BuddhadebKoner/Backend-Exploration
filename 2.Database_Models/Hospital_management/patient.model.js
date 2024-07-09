import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      diagonoseWith: {
         type: String,
         required: true
      },
      address: {
         type: String,
         required: true
      },
      age: {
         type: Number,
         required: true
      },
      bloodGroup:{
         type: String,
         required: true
      },
      gender:{
         type: String,
         enum: ["M","F","O"],
         required: true
      },
      admitedAt: {
         type: mongoose.Schema.ObjectId,
         ref: 'Hospital',
         required: true
      },
   },
   { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);