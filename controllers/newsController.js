const Article = require('../src/article');
const List = require('../src/list');
const NewsCall = require('../src/newsCall');

exports.thisIsTheNews = (req, res, next) => {
  const list = new List(Article);
  const news = new NewsCall();
  const { searchTerm } = req.body;

  news
    .getNews(searchTerm.toLowerCase())
    .then((newsArray) => {
      newsArray.forEach(article => list.addArticle({ webTitle: article.webTitle, webUrl: article.webUrl }));
    })
    .then(() => list.listArticles())
    .then(arrayOfArticles => res.render('index', {
      title: 'Stand by for the news',
      news: arrayOfArticles,
    }));
};
