/*
1. npm i express mongoose dotenv nodemon bcryptjs jsonwebtoken cookie-parser
2. add --type:module--- below main
3.add --dev:nodemon index.js-- inside script
then npm run dev
4.npm run dev is used in backend to run backend
5.npm start used to run frontend
*/
/*
1. install ---npm init---- to install packet.json
2. enter backend name
3.server create
4. import express ,call that express() ,and listen it-- has arg ->port and function
5. import dotenv , develop config for that
6.create controller,models,config-database.js(for database) folders under backend
7.import databaseconnection function
8.import cookieparsser for cookie 
by using app.use use all required
*/
/*
1.install thunder client
2.click new request
3.ther search the url(contain localhost:8080/api/v1/user/_______) and select the method
4.select body and add the json for that backend data then click the send
then go to mongoodb in browser click on browse
*/
/*
1.create auth.js under controller
*/
/*install npm i cors and import it
core->allow frontend to communicate with backend
*/
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import tweetRoutes from "./routes/tweetRoute.js";
import cors from "cors"; //allows resources on a web server to be requested from another domain outside the domain from which the resource originated.

dotenv.config({
  path: ".env",
});
databaseConnection();
const app = express();

//middlewares most important

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000", //orgin link
  credentials: true, //enable cridentials(cookies,...)
};
app.use(cors(corsOptions)); //pass the option

//api --route
app.use("/api/v1/user", userRoutes);
app.use("api/v1/tweet", tweetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`); //inside log(`...${}`)
});
