import mongoose from 'mongoose';
export const passengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
passengerSchema.index({ email: 1 }, { unique: true });
// const passengerModel = mongoose.model<
//   IPassenger & mongoose.Document<IPassenger, {}, IPassenger>
// >('Passenger', passengerSchema);
