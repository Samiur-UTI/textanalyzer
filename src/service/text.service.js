const fs = require("fs");
const path = require("path");

const defaultTextFilePath = path.join(__dirname, "../../storage/");

const wordCount = async (fileId) => {
  const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8")
  const sanitizedData = data.replace(/"/g, '')
  const totalWordsCount = sanitizedData.split(" ").length;
  const uniqueWords =new Set(sanitizedData.toLowerCase().split(" "))
  return {
    numberOfWords: totalWordsCount,
    numberOfUniqueWords: uniqueWords.size,
  };
};

const characterCount = async (fileId) => {
    const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8");
    const sanitizedData = data.replace(/[.".]/g, '')
    const totalWords = sanitizedData.split(" ");
    let charLength=0;
    for (let i=0;i<totalWords.length;i++){
        charLength+=totalWords[i].length
    }
    // Finding all distinct chars in O(n) time and constant space
    const totalUniqueChars = findDistinctCharacters(sanitizedData);
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
    return result.length-1;
}

const sentenceCount = async (fileId) => {
    const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8");
    let sentences=0;
    for(let i=0;i<data.length;i++){
        if(data[i] === "."){
            sentences+=1
        }
    }
    return sentences
};

const paragraphCount = async (fileId) => {
    const data = fileId ? fs.readFileSync(`${defaultTextFilePath}${fileId}`, "utf-8") : fs.readFileSync(`${defaultTextFilePath}sample.txt`, "utf-8");
    return data.split("\n").length
};

const largestWordsinParagraphs = async (fileId) => {};

module.exports = {
  wordCount,
  characterCount,
  sentenceCount,
  paragraphCount,
  largestWordsinParagraphs,
};
