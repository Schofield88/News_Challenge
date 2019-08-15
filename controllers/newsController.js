const Article = require('../src/article');
const List = require('../src/list');
const NewsCall = require('../src/newsCall');
const Aylien = require('../src/aylien');

exports.thisIsTheNews = (req, res, next) => {
  const list = new List(Article);
  const news = new NewsCall();
  const aylien = new Aylien();
  const { searchterm } = req.body;

  news
    .getNews(searchterm.toLowerCase())
    .then(newsArray => aylien.getImages(newsArray))
    .then((theNews) => {
      theNews.forEach((article) => {
        list.addArticle({
          webTitle: article.webTitle,
          webUrl: article.webUrl,
          image: article.image,
        });
      });
      return list.listArticles();
    })
    .then((arrayOfArticles) => {
      res.render('index', {
        title: 'Stand by for The News',
        news: arrayOfArticles,
        search: searchterm,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};
