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

const characterCount = async (fileId) => {
    const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8");
    const totalWords = data.split(" ");
    let charLength=0;
    for (let i=0;i<totalWords.length;i++){
        charLength+=totalWords[i].length
    }
    const totalUniqueChars = findDistinctCharacters(data);
    return {
        charLength,
        totalUniqueChars
    }
};

function findDistinctCharacters(s) {
    if (!s) {
        return "";
    }
    // Initialize a bitmask to keep track of encountered characters
    let bitmask = 0;
    // Initialize a result string
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let charValue = s.charCodeAt(i);
        if ((bitmask & (1 << charValue)) === 0) {
            result += s[i];
            bitmask |= (1 << charValue);
        }
    }
    return result.length;
}

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
