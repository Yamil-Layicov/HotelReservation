import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/User.js";
const router = express.Router();
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send("you are logged in")
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send("you are logged in you can delete your account")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send("you are admin logged in you can delete your account")
// })

//Create
router.post("/", verifyUser, createUser);

//Update
router.put("/:id", verifyUser, updateUser);

//Delete
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);

//Get All
router.get("/", verifyAdmin, getAllUser);

export default router;