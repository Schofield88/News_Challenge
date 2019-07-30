const NewsCall = require('../src/newsCall');

describe('newsCall', () => {
  const response = {
    response: {
      status: 'ok',
      userTier: 'developer',
      total: 102081,
      startIndex: 1,
      pageSize: 10,
      currentPage: 1,
      pages: 10209,
      orderBy: 'newest',
      results: [
        {
          id:
            'politics/blog/live/2019/jul/15/tory-leadership-latest-news-boris-johnson-liam-fox-dismisses-boris-johnsons-plans-for-us-uk-trade-deal-as-unrealistic-live-news',
          type: 'liveblog',
          sectionId: 'politics',
          sectionName: 'Politics',
          webPublicationDate: '2019-07-15T13:31:20Z',
          webTitle: 'Brexit happens, hilarity ensues',
          webUrl: 'https://www.thelulz.com/politics/blog/live/2019/jul/15/brexit-lulz',
          apiUrl: 'https://content.thelulz.com/politics/blog/live/2019/jul/15/brexit-rofl-and-lol',
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
      ],
    },
  };

  const news = new NewsCall();

  it('getNews() returns an array of the news', () => {
    // makes sure the test knows that four assertions will be made
    expect.assertions(4);
    const searchTerm = 'politics';
    // The following two lines do exactly the same thing
    // news.makeTheCall = jest.fn().mockImplementation(() => Promise.resolve(response));
    jest.spyOn(news, 'makeTheCall').mockResolvedValue(response);
    // note that 'return'. IT HAS TO BE THERE
    return news.getNews(searchTerm).then((data) => {
      const newsObject = data[0];
      expect(news.makeTheCall).toHaveBeenCalledWith(searchTerm);
      expect(newsObject).toHaveProperty('webTitle');
      expect(newsObject).toHaveProperty('webUrl');
      expect(newsObject).toHaveProperty('sectionName', 'Politics');
    });
  });
});
