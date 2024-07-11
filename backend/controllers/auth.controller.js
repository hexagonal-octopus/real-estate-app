import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, password } = req.body;

    // @TODO: Hashed the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // @TODO: Create a New User and save it to database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  // db operations
  try {
    const { username, password } = req.body;

    // @TODO: Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    // @TODO: Check  if the password correct
    const isPasswordInvalid = await bcrypt.compare(password, user.password);
    if (!isPasswordInvalid)
      return res.status(401).json({ message: "Invalid Credentials!" });

    // @TODO: Generate cookie Token and Send to User
    const age = 1000 * 60 * 60 * 24 * 7; // set 1 week

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });

    // send data to frontend exclude password
    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true -> for production force to use https protocol
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something happened!!" });
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logout Successfully!" });
};
