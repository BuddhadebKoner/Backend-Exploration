import mongoose from 'mongoose';

const productSchema = new mongoose.schema({
   name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
   },
   description: {
      type: String,
      required: true,
      maxlength: 2000
   },
   price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32
   },
   stock: {
      default: 0,
      type: Number,
   },
   category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true
   },
   photo: {
      type: String,
   },
   owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
   },
}, { timestamps: true });


export const Product = mongoose.model('Product', productSchema);