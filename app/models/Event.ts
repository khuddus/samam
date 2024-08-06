// models/Event.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IEvent extends Document {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
  googleMapsLink: string;
  createdBy: IUser['_id'];
}

const EventSchema: Schema<IEvent> = new Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  googleMapsLink: { type: String, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Event = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
export { Event };
