const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require("./config/db.js")
const userRouter = require("./routes/userRoute.js")

const app = express();
const port = 8000;

// --- Middleware
app.use(express.json())
app.use(cors())

// --- Connect to MongoDB
connectDB();

// api endpoints
app.use("/api/user", userRouter)
// app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)

app.get('/', (req, res) => res.send('All API endpoint is working !' + port));

app.listen(port, () => console.log(`Listening on port ${port}!`))