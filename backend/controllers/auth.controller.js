import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    try{
        // console.log(req.body);
        const {username, email, password} = req.body;

        // @TODO: Hashed the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // @TODO: Create a New User and save it to database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        console.log(newUser);
        res.status(201).json({message: "User created successfully"})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to create user!"})
    }
    
}

export const login = async (req, res) => {
    // db operations
    try {
        const {username, password} = req.body;

        // @TODO: Check if the user exists

        // @Todo: Check  if the password correct

        // @Todo: Generate cookie Token and Send to User
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Something happened!!"})
    }
}

export const logout = (req, res) => {
    // db operations
}