function Article(urlObject) {
  const article = urlObject;

  function read() {
    const myArticle = { webTitle: article.webTitle, webUrl: article.webUrl, image: article.image };

    return myArticle;
  }

  return Object.freeze({ read });
}

module.exports = Article;
