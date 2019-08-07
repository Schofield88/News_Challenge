const fetch = require('node-fetch');

function NewsCall() {
  const apiRequest = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=';

  function makeTheCall(word) {
    const request = apiRequest + word;
    return fetch(request).then(response => response.json());
  }

  function getNews(searchTerm, callIt = makeTheCall) {
    return callIt(searchTerm).then(news => news.response.results);
  }

  return Object.freeze({ getNews });
}

module.exports = NewsCall;
