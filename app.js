import express from "express";
import foodsRouter from "./routers/foods.js"
import routeNotMiddleware from "./middlewares/route-not-middleware.js";
import errorHandler from "./middlewares/error-handler-middleware.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/foods", foodsRouter);


app.use(routeNotMiddleware);
app.use(errorHandler);


app.listen(port, () => {
    console.log("eccomi");
    
});