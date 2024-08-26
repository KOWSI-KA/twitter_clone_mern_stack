/*
1.import express
2.call express.router then call that with route(path) then its function(get/post)
3. express->router->route,post|get
*/
import express from "express";
import {
  Register,
  Login,
  logout,
  bookmark,
  follow,
  getMyProfile,
  getOtherUsers,
  unfollow,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register); //if path has /register post that value
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

export default router;
