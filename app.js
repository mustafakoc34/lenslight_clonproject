import express from "express"

const app = express();
const port = 3000;


//ejs template
app.set("view engine", "ejs");

//static dosyaların yolunu belirten kod
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index")
});
app.get("/about", (req,res)=>{
    res.render("about")
});



app.listen(port, ()=>{
    console.log(`app portu: ${port}`)
});