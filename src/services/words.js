const config = require("../../config");
const fetch = require("node-fetch");

async function getWords(limit = 10) {
  try {
    const words = await fetch(
      `${
        config.wordnikPath
      }/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=${limit}&api_key=${
        config.wordnikKey
      }`
    ).then(res => res.json());
    return words;
  } catch (e) {
    console.log("get words error - ", e);
  }
}

module.exports = {
  getWords
};
