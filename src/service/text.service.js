const fs = require("fs");
const path = require("path");

const defaultTextFilePath = path.join(__dirname, "../../storage/");

const wordCount = async (fileId) => {
  const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8")
  const totalWords = data.split(" ");
  const totalWordsCount = data.split(" ").length;
  const uniqueWords = [
    ...new Set(totalWords.map((word) => word.toLowerCase())),
  ];
  return {
    numberOfWords: totalWordsCount,
    numberOfUniqueWords: uniqueWords.length,
  };
};

const characterCount = async (fileId) => {};

const sentenceCount = async (fileId) => {};

const paragraphCount = async (fileId) => {};

const largestWordsinParagraphs = async (fileId) => {};

module.exports = {
  wordCount,
  characterCount,
  sentenceCount,
  paragraphCount,
  largestWordsinParagraphs,
};
