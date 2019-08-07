function List(articleModel) {
  let articleArray = [];
  const article = articleModel;

  function listArticles() {
    return Promise.resolve(articleArray);
  }

  function addArticle(articleInfoObject) {
    const Article = article;
    const newArticle = new Article(articleInfoObject);
    const articleObject = newArticle.read();
    const newArray = articleArray.concat(articleObject);
    articleArray = newArray;
  }

  return Object.freeze({ listArticles, addArticle });
}

module.exports = List;
