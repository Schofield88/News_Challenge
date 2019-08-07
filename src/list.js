class List {
  constructor(articleModel) {
    this.articleArray = [];
    this.article = articleModel;
  }

  listArticles() {
    return Promise.resolve(this.articleArray);
  }

  addArticle(articleInfoObject) {
    const Article = this.article;
    const newArticle = new Article(articleInfoObject);
    const articleObject = newArticle.read();
    const newArray = this.articleArray.concat(articleObject);
    this.articleArray = newArray;
  }
}

module.exports = List;
