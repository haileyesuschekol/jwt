const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization || !authorization.startsWith("Bearer")) {
    throw new CustomAPIError("Token required!", 401)
  }

  const token = authorization.split(" ")[1]

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const { username, id } = decode
    req.user = decode
    next()
  } catch (error) {
    throw new CustomAPIError("Unauthorized!", 401)
  }
}

module.exports = authMiddleware
