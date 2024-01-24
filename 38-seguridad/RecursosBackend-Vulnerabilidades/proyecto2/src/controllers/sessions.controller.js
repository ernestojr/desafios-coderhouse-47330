import Users from "../dao/Mongo/Users.js";
import { createHash, validatePassword } from "../utils.js";


const userService = new Users();

const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
        const hashedPassword = await createHash(password);
        const user = {
            first_name,
            last_name,
            email,
            password: hashedPassword
        }
        const result = await userService.saveUser(user); // A04 - Insecure Design
        res.send({ status: "success", payload: result._id })
    } catch(error){
        console.log("ha ocurrido un erro durante el registro", error.message); // A09 - Logging and monitoring Failures
        res.status(500).send({ status: "error", error: error.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
    const user = await userService.getUserByEmail(email);
    if (!user) return res.status(400).send({ status: "error", error: "User doesn't exist" });
    const passwordValidation = await validatePassword(user, password);
    if (!passwordValidation) return res.status(400).send({ status: "error", error: "Incorrect credentials" });
    res.send({ status: "success", message: "Logged in!" })
}

export default {

    register,
    login

}