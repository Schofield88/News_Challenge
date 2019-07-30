const fetch = require('node-fetch');

class NewsCall {
  constructor() {
    this.apiRequest = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=';
  }

  makeTheCall(word) {
    const request = this.apiRequest + word;
    return fetch(request).then(response => response.json());
  }

  getNews(searchTerm) {
    return this.makeTheCall(searchTerm).then(news => news.response.results);
  }
}

module.exports = NewsCall;
