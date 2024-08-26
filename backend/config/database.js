/*
1.signin to database mongooba
2.create a new project
3.click on create->click create deployment
4.click on create database user
5.click on connect(but sometime it go directly) ,then click on mongoodb
6.copy that url and paste in env
7.import mongoo and create connection by passing url
*/
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env", //path of env
});
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default databaseConnection;
