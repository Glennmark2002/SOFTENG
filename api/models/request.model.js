import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema(
  {
    id : { type : String },
    username : { type: String },
    date     : { type: String },
    purpose  : { type: String }, 
    picture  : { type: String }
  }
);

const Request = mongoose.model('Request', requestSchema);
export default Request;