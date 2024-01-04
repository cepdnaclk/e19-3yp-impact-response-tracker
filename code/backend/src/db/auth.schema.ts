import mongoose, { Document, Schema } from "mongoose";

interface AuthDocument extends Document {
  email: string;
  password: string;
}

const authSchema = new Schema({
  email: String,
  password: String,
});

const AuthModel = mongoose.model<AuthDocument>("Auth", authSchema);

export default AuthModel;
