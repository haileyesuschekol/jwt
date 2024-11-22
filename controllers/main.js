const login = async (req, res) => {
  res.send("Login/Register")
}

const dashboard = (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100)
  res
    .status(200)
    .json({ msg: `Hello, John`, secret: `Here is your number ${luckNumber}` })
}
module.exports = { login, dashboard }
