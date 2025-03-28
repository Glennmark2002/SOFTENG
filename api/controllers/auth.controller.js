import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if(user){
      const token = jwt.sign({id: user._id}, process.env.SECRET);
      const { password: _password, ...rest } = user._doc;
      createCookie(token, rest, res);
    } else {
      const hashed = bcrypt.hashSync(process.env.SECRET, 1);
      const newUser = new User({
        username : req.body.name, 
        email : req.body.email, 
        password : hashed,
        picture : req.body.photo
      })

      await newUser.save();

      const token = jwt.sign({id: newUser._id}, process.env.SECRET);
      const { password: _password2, ...rest } = newUser._doc;
      createCookie(token, rest, res);

    }

  } catch (error) {
    next(error)
  }
}

function createCookie(token, rest, res) {
  const expires = new Date(Date.now() + 3600000);
  res.cookie('access_token', token, {
    httpOnly: true,
    expires
  }).status(200).json(rest);
}