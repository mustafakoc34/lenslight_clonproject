import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)

        res.status(201).json({
            succeded: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })

        let same = false;

        if (user) {
            same = await bcrypt.compare(password, user.password)
        } else {
            return res.status(401).json({
                succeded: false,
                error: "kullanıcı yok.."
            })
        }

        if (same) {

            const token = createToken(user._id);
            res.cookie("jsonwebtoken", token, {
                httpOnly:true,
                maxAge: 1000*60*60*24,
            } )
            res.redirect("/users/dashboard");
        } else {
            res.status(401).json({
                succeded: false,
                error: "şifre yanlış.."
            })
        }

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
};

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
}

const getDashboardPage = (req, res) => {
    res.render("dashboard", {
        link: "dashboard",
        title: "Hakkımızda"
    })
}


export { createUser, loginUser, getDashboardPage };