import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";


dotenv.config(); // env dosyası içindeki bilgilere ulaşmak için..

//connection to the db
conn();

const app = express();
const port = process.env.PORT;


//ejs template
app.set("view engine", "ejs");

//static dosyaların yolunu belirten kod
app.use(express.static("public"));
app.use(express.json());

//routes
app.use("/", pageRoute);
app.use("/photos", photoRoute);

// app.get("/", (req,res)=>{
//     res.render("index")
// });
// app.get("/about", (req,res)=>{
//     res.render("about")
// });



app.listen(port, ()=>{
    console.log(`app portu: ${port}`)
});