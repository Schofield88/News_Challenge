import List from '../src/list';
import Article from '../src/article';

jest.mock('../src/article');

Article.mockImplementation(() => ({
  read: jest.fn(() => ({
    webTitle: 'Today in the news',
    webUrl: 'http://www.guardian.com/article',
    image: 'lulz.png',
  })),
}));

describe('List', () => {
  const articleMock = Article;
  const list = new List(articleMock);

  it('returns an array of objects with listArticles()', () => {
    expect.assertions(1);
    return list.listArticles().then((data) => {
      expect(data).toStrictEqual([]);
    });
  });

  it('adds a new article model with addArticle()', () => {
    expect.assertions(2);

    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
      image: 'lulz.png',
    };

    list.addArticle(articleObject);

    return list.listArticles().then((data) => {
      expect(articleMock).toHaveBeenCalledWith(articleObject);
      expect(data).toHaveLength(1);
    });
  });
});
