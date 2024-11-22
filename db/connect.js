require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Db connected Successfully!"))
    .catch((error) => console.error(error))
}

module.exports = connectDB
