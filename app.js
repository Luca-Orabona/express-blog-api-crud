import express from "express";
import foodsRouter from "./routers/foods.js"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/foods", foodsRouter);


app.listen(port, () => {
    console.log("eccomi");
    
});