const wordsService = require("../services/words");
const translateService = require("../services/translate");

const sourceLanguage = "en";
const targetLanguage = "ru";

async function get(ctx) {
  const { limit = 4 } = ctx.request.query;
  const words = await wordsService.getWords(limit);
  const translates = await Promise.all(
    words.map(async wordObj => {
      const { word } = wordObj;
      const translate = await translateService.translateWord(
        word,
        sourceLanguage,
        targetLanguage
      );
      return {
        word,
        translate,
        sourceLanguage,
        targetLanguage
      };
    })
  );
  ctx.response.body = translates;
}

module.exports = {
  get
};
