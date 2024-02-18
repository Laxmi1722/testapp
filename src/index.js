// require('dotenv').config();
import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
    path: "./env",
    
});
connectDB()
    .then(() => {
        app.listen(process.env.port || 8000.0, () => {
            console.log(`Server is running on port: ${process.env.port}`);
        });
    })
    .catch((error) => {
        console.log("momgodb connection failed: ", error);
    });

//  (async()=>{
//     try{
//         await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

//     }
//     catch(error){
//         console.log("Error: ", error)
//         throw err

//     }
//  })()