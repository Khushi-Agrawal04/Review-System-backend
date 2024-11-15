import User from "../model/user.js"
export const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            role: "Admin"
        });
        const saveUser = await newUser.save();
        res.json({
            newUser
        });
    }
    catch (error) {
        console.log(error)
        res.json({
            error: "Error Occured"
        });
    }
};
export const createStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            role: "Student"
        });

        const saveUser = await newUser.save();

        res.json({
            saveUser
        });
    }
    catch (error) {
        console.log(error)
        res.json({
            error: "Error Occured"
        });
    }
};
export const createAlumni = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password,
            role: "Alumni"
        });

        const saveUser = await newUser.save();

        res.json({
            saveUser
        });
    }
    catch (error) {
        console.log(error)
        res.json({
            error: "Error Occured"
        });
    }
};

export const getAllUsers =async (req,res) => {
    try {
        const users = await User.find();
        res.json({
            users,
        });
    } catch (error) {
        return res.status(400).json({
            error:"cannot fetch data",
        })
    };
}