class List {
  constructor(articleModel) {
    this.articleArray = [];
    this.article = articleModel;
  }

  listArticles() {
    // console.log(`Your news articles array: ${this.articleArray}`);
    return this.articleArray;
  }

  addArticle(articleInfoObject) {
    return new Promise((resolve, reject) => {
      const Article = this.article;
      const newArticle = new Article(articleInfoObject);
      newArticle
        .read()
        .then((articleObject) => {
          const newArray = this.articleArray.concat(articleObject);
          this.articleArray = newArray;
        })
        .then(() => {
          this.listArticles();
        })
        .then(value => resolve());
    });
  }
}

module.exports = List;
