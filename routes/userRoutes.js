import express from "express";
import * as authController from '../controllers/authController.js';

const router = express.Router();

router
    .route("/signup")
    .post(authController.signUp);

router
    .route("/login")
    .post(authController.login);

export default router;