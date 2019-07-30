class List {
  constructor(articleModel) {
    this.articleArray = [];
    this.article = articleModel;
  }

  listArticles() {
    return this.articleArray;
  }

  addArticle(articleURL) {
    const Article = this.article;
    const newArticle = new Article(articleURL);
    const newArray = this.articleArray.concat(newArticle.read());
    console.log(newArray);
    this.articleArray = newArray;
  }
}

module.exports = List;
