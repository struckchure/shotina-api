import { Router } from "express";

import {
  listURL,
  shortenURL,
  getURL,
  updateURL,
  deleteURL,
} from "../controllers/urlController.js";

const router = Router();

router.route("/url").get(listURL).post(shortenURL);
router.route("/url/:slug").get(getURL).put(updateURL).delete(deleteURL);

export default router;
