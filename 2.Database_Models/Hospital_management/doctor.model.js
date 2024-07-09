import mongoose from 'mongoose';



const doctorSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      sallary: {
         type: Number,
         required: true
      },
      qualification: {
         type: String,
         required: true
      },
      experienceInYears: {
         default: 0,
      },
      worksInHospitals: [
         {
            type: mongoose.Schema.ObjectId,
            ref: 'Hospital',
         },
      ]
   },
   { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);