const AYLIENTextAPI = require('aylien_textapi');
const { aylienID, aylienKey } = require('../aylienCredentials');

class Article {
  constructor(urlObject) {
    this.article = urlObject;
  }

  getImage(theUrl) {
    const textapi = new AYLIENTextAPI({
      application_id: aylienID,
      application_key: aylienKey,
    });

    const articleImage = new Promise((resolve, reject) => {
      const image = textapi.extract(
        {
          url: theUrl,
          best_image: true,
        },
        (err, result) => {
          if (err === null) {
            resolve(result.image);
          }
        },
      );
    });

    return articleImage;
  }

  read() {
    return this.getImage(this.article.webUrl)
      .then((image) => {
        const article = {
          webTitle: this.article.webTitle,
          webUrl: this.article.webUrl,
          image,
        };
        return article;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Article;
