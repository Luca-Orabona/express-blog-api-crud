import express from "express";
import foodController from "../controllers/foodController.js";

const router = express.Router();

//INDEX
router.get("/", foodController.index);

//SHOW
router.get("/:id", foodController.show);

//STORE
router.post("/", foodController.store);

//UPDATE
router.put("/:id", foodController.update);

//DESTROY
router.delete("/:id", foodController.destroy);

export default router;