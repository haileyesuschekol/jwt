require("express-async-errors")

const express = require("express")
const app = express()

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const connectDB = require("./db/connect")

// middleware
app.use(express.static("./public"))
app.use(express.json())

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

connectDB()
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
