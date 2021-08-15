const express   = require("express");
const app       = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

//config môi trường
dotenv.config();

//kết nối mongoDB
mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB connection successfull!"))
    .catch((err) => console.log(err));

//sử dụng json để trả ra response
app.use(express.json());

//router 
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);

//run server
app.listen(8800, () =>{
    console.log('backend server is running');
});