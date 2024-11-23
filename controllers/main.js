const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")
const { json } = require("express")

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new CustomAPIError("please provide email and password!", 400)
  }

  const id = new Date().getMilliseconds()

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
  res.status(200).json({ ms: "user created", token })
}

const dashboard = (req, res) => {
  const { authorization } = req.headers

  if (!authorization || !authorization.startsWith("Bearer")) {
    throw new CustomAPIError("Token required!", 401)
  }

  const token = authorization.split(" ")[1]

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const luckNumber = Math.floor(Math.random() * 100)
    res
      .status(200)
      .json({
        msg: `Hello, ${decode.username}`,
        secret: `Here is your lucky number ${luckNumber}`,
      })
  } catch (error) {
    throw new CustomAPIError("Unauthorized!", 401)
  }
}
module.exports = { login, dashboard }
