import express from "express";
import { createPhoto, getAllPhotos, getAPhoto } from "../controllers/photoController.js";

const router = express.Router();

router.route("/").post(createPhoto);
router.route("/").get(getAllPhotos);

router.route("/:id").get(getAPhoto);

export default router;