const CustomAPIError = require("../errors/custom-error")

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new CustomAPIError("please provide email and password!", 400)
  }
  res.send("Login/Register")
}

const dashboard = (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100)
  res
    .status(200)
    .json({ msg: `Hello, John`, secret: `Here is your number ${luckNumber}` })
}
module.exports = { login, dashboard }
