const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")

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
  const luckNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your lucky number ${luckNumber}`,
  })
}
module.exports = { login, dashboard }
