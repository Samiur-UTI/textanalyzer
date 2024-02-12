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

router.get("/count-character", authenticateJWT, countCharacters);

router.get("/count-sentence", authenticateJWT, countSentences);

router.get("/count-paragraph", authenticateJWT, countParagraph);

router.get(
  "/count-longest",
  authenticateJWT,
  countLargestWordsInParagraphs
);

router.post("/file-upload", authenticateJWT, uploadFile);

module.exports = router
