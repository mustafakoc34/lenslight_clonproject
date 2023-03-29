import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName:"lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("db bağlantısı başarılı")
    }).catch((err)=>{
        console.log(`error: ${err}`)
    })
};

export default conn;