import { UserSchema } from "../model/userModel.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import pkg from 'jsonwebtoken';
const { jwt } = pkg;

const User = mongoose.model('User', UserSchema);

export const root = {
    user: async ({ email })=>await User.findOne({email}),
  
    signUp: async ({ firstName, lastName, email, accessToken, oauthProvider }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedAccessToken = await bcrypt.hash(accessToken, 10);
      const user = new User({ firstName, lastName, email, hashedAccessToken, oauthProvider });
      await user.save();
      console.log(user);
      return 'User registered successfully';
    },
  
    signIn: async ({ email, accessToken  }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      console.log(user);
  
      // const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
      return "Sign in successfully";
    },
  };