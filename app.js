import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from "morgan";
import mangaRoutes from "./routes/mangaChapters.js"
import { createProxyMiddleware } from "http-proxy-middleware";

// CONFIGURATION
const apiProxy = createProxyMiddleware('/api', {
    target: 'http://13.233.130.222:4000', // Replace with the URL of the HTTP service you want to proxy
    changeOrigin: true,
    secure:false // Optional, changes the "Host" header to the target URL
  });

dotenv.config();
const app = express();
app.use('/api', apiProxy)
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

// ROUTES

app.use("/manga" , mangaRoutes);

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;
const mongoString = process.env.MONGODB_URL.toString()
mongoose.set('strictQuery', false);
mongoose.connect(mongoString, {
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))


}).catch((error)=> console.log(`${error} did not connect`))

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})