import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
dotenv.config();

const app = express();

const dbConnection = async () => {
    await mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("DB CONNECTED SUCCESSFULLY")
    })

}
dbConnection();

app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(process.env.PORT, () => {
    console.log("server is listening on " + process.env.PORT)
})