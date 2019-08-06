const Article = require('../src/article');
const List = require('../src/list');
const NewsCall = require('../src/newsCall');

exports.thisIsTheNews = (req, res, next) => {
  const list = new List(Article);
  const news = new NewsCall();
  const { searchterm } = req.body;

  news
    .getNews(searchterm.toLowerCase())
    .then((newsArray) => {
      console.log(newsArray);
      newsArray.forEach((article) => {
        list.addArticle({
          webTitle: article.webTitle,
          webUrl: article.webUrl,
        });
      });
    })
    .then((something) => {
      console.log(something);
      list.listArticles();
    })
    .then(arrayOfArticles => res.render('index', {
      title: 'Stand by for the news',
      news: arrayOfArticles,
      search: searchterm,
    }))
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};
