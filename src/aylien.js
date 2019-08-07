const AYLIENTextAPI = require('aylien_textapi');
const { aylienID, aylienKey } = require('../aylienCredentials');

function Aylien() {
  const textapi = new AYLIENTextAPI({
    application_id: aylienID,
    application_key: aylienKey,
  });

  const aylienCall = ({ webUrl, webTitle }) => new Promise((resolve, reject) => {
    textapi.extract(
      {
        url: webUrl,
        best_image: true,
      },
      (err, result) => {
        if (err === null) {
          const articleWithImage = {
            webUrl,
            webTitle,
            image: result.image,
          };
          resolve(articleWithImage);
        }
      },
    );
  });

  function getImages(megaArray, myAylien = aylienCall) {
    const wrappedPromises = megaArray.map((news) => {
      const { webUrl, webTitle } = news;
      const singlePromise = myAylien({ webUrl, webTitle });

      return singlePromise;
    });

    return Promise.all(wrappedPromises);
  }

  return Object.freeze({ getImages });
}

module.exports = Aylien;
