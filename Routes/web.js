import express from "express"
import HomeController from "../controllers/HomeController.js"

const router = express.Router()

router.route("/").get(HomeController.getHome)

router.route("/user").get(HomeController.user)

router.post("/signin", HomeController.register)

router.post("/login", HomeController.login)

export default router