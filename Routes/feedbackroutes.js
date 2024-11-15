import { createAdmin } from "../controllers/userControllers.js";
import { createStudent } from "../controllers/userControllers.js";
import { createAlumni } from "../controllers/userControllers.js";
import { getAllUsers } from "../controllers/userControllers.js";
import { createCompany, getAllCompanies } from "../controllers/companycontroller.js";
import { createReview , getAllReviews} from "../controllers/reviewController.js";
import { likeReviews} from"../controllers/likeController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router()

router.post("/admin/create",createAdmin);
router.post("/Student/create",createStudent);
router.post("/Alumni/create",createAlumni);
router.get("/getAllUser",getAllUsers);
router.post("/Company/create",isAdmin,createCompany);
router.get("/getAllComapnies",getAllCompanies);
router.post("/Review/create",createReview);
router.get("/getAllReview",getAllReviews);
router.post("/Likes/create",likeReviews);

export default router;
