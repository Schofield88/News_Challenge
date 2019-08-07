import Article from '../src/article';

describe('Article', () => {
  it('has read() that returns its URL as a string', () => {
    expect.assertions(3);
    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };
    const article = new Article(articleObject);
    const readArticle = article.read();

    expect(readArticle).toHaveProperty('webTitle');
    expect(readArticle).toHaveProperty('webUrl');
    expect(readArticle).toHaveProperty('image');
  });
});
