import Article from '../src/article';

describe('Article', () => {
  it('has read() that returns its URL as a string', () => {
    expect.assertions(3);
    const articleObject = {
      webTitle: 'Today in the news',
      webUrl: 'http://www.guardian.com/article',
    };
    const article = new Article(articleObject);

    return article.read().then((myObject) => {
      console.log(myObject);
      expect(myObject).toHaveProperty('webTitle');
      expect(myObject).toHaveProperty('webUrl');
      expect(myObject).toHaveProperty('image');
    });
  });
});
