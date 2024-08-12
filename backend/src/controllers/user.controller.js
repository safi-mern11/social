import { User } from "../models/user.model";

const signup = async (req, res) => {
    const { fullName, userName, email, password } = req.body;
    const user = await User.create({
        fullName,
        userName,
        email,
        password
    })
    console.log(user, "user")
    res.json({
        success: true
    })
}

export { signup }