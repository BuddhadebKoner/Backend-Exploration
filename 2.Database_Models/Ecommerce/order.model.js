import mongoose from 'mongoose';


const oderItemSchema = new mongoose.Schema({
   productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
   },
   quantity: {
      type: Number,
      required: true,
   },
},);

const orderSchema = new mongoose.Schema({
   orderPrice: {
      type: Number,
      required: true,
   },
   customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
   },
   oderItems: {
      type: [oderItemSchema]
   },
   address: {
      type: String,
      required: true,
   },
   status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
   }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);