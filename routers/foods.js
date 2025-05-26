import express from "express";
import foodPosts from "../data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.json({
        data: foodPosts,
        count: foodPosts.length
    });
});
//SHOW
router.get("/:id", (req, res) => {
    const foodId = req.params.id;
    const food = foodPosts.find(curFood => curFood.id === parseInt(foodId));

    res.json({
        data: food
    });
});
//STORE
router.post("/", (req, res) => {
    
    res.json({
        data: "Creo un nuovo elemento"
    });
});
//UPDATE
router.put("/:id", (req, res) => {
    
    res.json({
        data: "Modifico un elemento"
    });
});
//DESTROY
router.delete("/:id", (req, res) => {
    
    res.json({
        data: "elimino un elemento"
    });
});

export default router;