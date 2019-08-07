class Article {
  constructor(urlObject) {
    this.article = urlObject;
  }

  read() {
    const article = {
      webTitle: this.article.webTitle,
      webUrl: this.article.webUrl,
      image: this.article.image,
    };
    return article;
  }
}

module.exports = Article;
