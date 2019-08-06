import List from '../src/list';
import Article from '../src/article';

jest.mock('../src/article');

Article.mockImplementation(() => ({
  read: jest.fn().mockResolvedValue({
    webTitle: 'Today in the news',
    webUrl: 'http://www.guardian.com/article',
    image: 'lulz.png',
  }),
}));

describe('List', () => {
  const articleMock = Article;
  const list = new List(articleMock);

  it('returns an array of objects with listArticles()', () => {
    expect(list.listArticles()).toStrictEqual([]);
  });

  it('adds a new article model with addArticle()', () => {
    expect.assertions(2);

    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };

    return list.addArticle(articleObject).then((response) => {
      const listMyArticles = list.listArticles();

      expect(articleMock).toHaveBeenCalledWith(articleObject);
      expect(listMyArticles).toHaveLength(1);
    });
  });
});
