import List from '../src/list';
import Article from '../src/article';

jest.mock('../src/article');

Article.mockImplementation(() => ({
  read: jest.fn(() => ({
    webTitle: 'Today in the news',
    webUrl: 'http://www.guardian.com/article',
  })),
}));

describe('list', () => {
  const articleMock = Article;
  const list = new List(articleMock);

  it('returns an array of objects with listArticles()', () => {
    expect(list.listArticles()).toStrictEqual([]);
  });

  it('adds a new article model with addArticle()', () => {
    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };

    list.addArticle(articleObject);
    const listMyArticles = list.listArticles();

    expect(articleMock).toHaveBeenCalledWith(articleObject);
    expect(listMyArticles).toHaveLength(1);
  });
});
