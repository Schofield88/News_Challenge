const fetch = require('node-fetch');

class NewsCall {
  constructor() {
    this.apiRequest = 'https://news-summary-api.herokuapp.com/guardian'
      + '?apiRequestUrl=http://content.guardianapis.com/search?section=politics';
  }

  makeTheCall() {
    const request = this.apiRequest;
    return fetch(request).then(response => response.json());
  }

  getNews() {
    return this.makeTheCall().then(news => news.response.results);
  }
}

module.exports = NewsCall;
