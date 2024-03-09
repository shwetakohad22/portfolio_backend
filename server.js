const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config;
const contactRoute = require("../server/route/contactRoute.js");
const app = express();

//creating the middlewear
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);


const port = process.env.PORT || 6000;
app.listen(port, console.log(`server listening to port ${port}`));
