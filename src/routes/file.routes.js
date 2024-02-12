const express = require("express");
const authenticateJWT = require("../middleware/auth.middleware");
const {
  countWords,
  countCharacters,
  countSentences,
  countParagraph,
  countLargestWordsInParagraphs,
  uploadFile,
} = require("../controller/file.controller");
const router = express.Router();

router.get("/count-word", authenticateJWT, countWords);

router.get("/count-character/:userId/:fileId", authenticateJWT, countCharacters);

router.get("/count-sentence/:userId/:fileId", authenticateJWT, countSentences);

router.get("/count-paragraph/:userId/:fileId", authenticateJWT, countParagraph);

router.get(
  "/count-longest/:fileId",
  authenticateJWT,
  countLargestWordsInParagraphs
);

router.post("/file-upload", authenticateJWT, uploadFile);

module.exports = router
