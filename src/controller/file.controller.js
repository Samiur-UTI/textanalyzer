const {
  wordCount,
  characterCount,
  sentenceCount,
  paragraphCount,
  largestWordsinParagraphs,
} = require("../service/text.service");

const countWords = async (req, res) => {
  const { fileId, userId } = req.params;

  try {
    const response = fileId
      ? await wordCount(fileId, userId)
      : await wordCount();
    res.status(200).json(response);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in countWords:", error);

    // Send back an appropriate error response
    // The exact status code and message might vary depending on the nature of the error
    // For example, if it's a file not found error, you might return a 404 status
    // Here, we use a generic 500 server error status
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

const countCharacters = async (req, res) => {
  const { fileId, userId } = req.params;

  try {
    const response = fileId
      ? await characterCount(fileId, userId)
      : await characterCount();
    res.status(200).json(response);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in countWords:", error);

    // Send back an appropriate error response
    // The exact status code and message might vary depending on the nature of the error
    // For example, if it's a file not found error, you might return a 404 status
    // Here, we use a generic 500 server error status
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

const countSentences = async (req, res) => {
  const { fileId, userId } = req.params;

  try {
    const response = fileId
      ? await wordCount(fileId, userId)
      : await wordCount();
    res.status(200).json(response);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in countWords:", error);

    // Send back an appropriate error response
    // The exact status code and message might vary depending on the nature of the error
    // For example, if it's a file not found error, you might return a 404 status
    // Here, we use a generic 500 server error status
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

const countParagraph = async (req, res) => {
  const { fileId, userId } = req.params;

  try {
    const response = fileId
      ? await wordCount(fileId, userId)
      : await wordCount();
    res.status(200).json(response);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in countWords:", error);

    // Send back an appropriate error response
    // The exact status code and message might vary depending on the nature of the error
    // For example, if it's a file not found error, you might return a 404 status
    // Here, we use a generic 500 server error status
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

const countLargestWordsInParagraphs = async (req, res) => {
  const { fileId, userId } = req.params;

  try {
    const response = fileId
      ? await wordCount(fileId, userId)
      : await wordCount();
    res.status(200).json(response);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in countWords:", error);

    // Send back an appropriate error response
    // The exact status code and message might vary depending on the nature of the error
    // For example, if it's a file not found error, you might return a 404 status
    // Here, we use a generic 500 server error status
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

const uploadFile = async (req, res) => {};

module.exports = {
  countWords,
  countCharacters,
  countSentences,
  countParagraph,
  countLargestWordsInParagraphs,
  uploadFile,
};
