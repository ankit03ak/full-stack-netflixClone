const express = require("express");
const cors = require("cors");  // Import the cors package
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

const app = express();

const PORT = 8800;
const MONGO_URL = process.env.MONGO_URL;

// Enable CORS for your backend
app.use(cors());  // Allow all origins (for development use)

// Optionally, restrict CORS to specific origins
// app.use(cors({
//   origin: 'http://localhost:5173' // Only allow requests from this frontend URL
// }));

mongoose.connect(MONGO_URL)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/lists", listRoute);
app.use("/api/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
