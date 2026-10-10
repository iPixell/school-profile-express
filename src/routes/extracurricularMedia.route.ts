import { Router } from "express";

import {
  getExtracurricularMedia,
  addExtracurricularMedia,
  deleteExtracurricularMedia,
} from "../controllers/extracurricularMedia.controller.js";

import { authenticate } from "../middlewares/authenticate.middleware.js";

import {
  uploadMedia,
  validateMediaFileSize,
} from "../middlewares/uploadMedia.middleware.js";

const router = Router();

// GET: Mengambil dokumentasi ekstrakurikuler
router.get(
  "/:id/media",
  authenticate,
  getExtracurricularMedia,
);

// POST: Upload foto atau video dokumentasi
router.post(
  "/:id/media",
  authenticate,
  uploadMedia.single("file"),
  validateMediaFileSize,
  addExtracurricularMedia,
);

// DELETE: Menghapus dokumentasi
router.delete(
  "/:id/media/:mediaId",
  authenticate,
  deleteExtracurricularMedia,
);

export default router;
