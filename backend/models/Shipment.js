
import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
  trackingNumber: String,
  sender: String,
  receiver: String,
  origin: String,
  destination: String,
  status: {
    type: String,
    default: 'Processing'
  }
}, { timestamps: true });

export default mongoose.model('Shipment', shipmentSchema);
