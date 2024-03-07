require("dotenv").config();
const express = require("express");
const cors = require("cors");
const evaluationRoute = require("./routes/evaluationRoute")
const userRoute = require("./routes/userRoute");
const port = process.env.PORT;
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/eval", evaluationRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
    console.log(`Port: ${port}: in use`)
})