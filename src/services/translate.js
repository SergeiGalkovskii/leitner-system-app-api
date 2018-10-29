const translate = require("translate");
const config = require("../../config");

async function translateWord(word, sourceLang = "en", targetLang = "ru") {
  try {
    return await translate(word, {
      from: sourceLang,
      to: targetLang,
      engine: "yandex",
      key: config.yandexTranslateKey
    }).then(res => res);
  } catch (e) {
    console.log("translateWord error - ", e);
  }
}

module.exports = {
  translateWord
};
