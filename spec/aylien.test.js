import Aylien from '../src/aylien';

describe('Aylien', () => {
  const megaData = [
    {
      id: 'sport/2019/aug/06/england-ashes-test-grounds-splendour-cricket',
      type: 'article',
      sectionId: 'sport',
      sectionName: 'Sport',
      webPublicationDate: '2019-08-06T11:24:35Z',
      webTitle: 'If only England could match the splendour of their Ashes Test grounds | The Spin',
      webUrl:
        'https://www.theguardian.com/sport/2019/aug/06/england-ashes-test-grounds-splendour-cricket',
      apiUrl:
        'https://content.guardianapis.com/sport/2019/aug/06/england-ashes-test-grounds-splendour-cricket',
      isHosted: false,
      pillarId: 'pillar/sport',
      pillarName: 'Sport',
    },
    {
      id: 'sport/2019/aug/06/is-the-us-finally-taking-sexual-abuse-in-sports-seriously',
      type: 'article',
      sectionId: 'sport',
      sectionName: 'Sport',
      webPublicationDate: '2019-08-06T09:00:15Z',
      webTitle: 'Is the US finally taking sexual abuse in sports seriously?',
      webUrl:
        'https://www.theguardian.com/sport/2019/aug/06/is-the-us-finally-taking-sexual-abuse-in-sports-seriously',
      apiUrl:
        'https://content.guardianapis.com/sport/2019/aug/06/is-the-us-finally-taking-sexual-abuse-in-sports-seriously',
      isHosted: false,
      pillarId: 'pillar/sport',
      pillarName: 'Sport',
    },
  ];
  const responseOne = {
    webTitle: 'If only England could match the splendour of their Ashes Test grounds | The Spin',
    webUrl:
      'https://www.theguardian.com/sport/2019/aug/06/england-ashes-test-grounds-splendour-cricket',
    image: 'lulz.png',
  };

  const responseTwo = {
    webTitle: 'Is the US finally taking sexual abuse in sports seriously?',
    webUrl:
      'https://www.theguardian.com/sport/2019/aug/06/is-the-us-finally-taking-sexual-abuse-in-sports-seriously',
    image: 'lulz2.png',
  };

  const aylien = new Aylien();

  it('getImages() returns news objects with images attached', () => {
    expect.assertions(2);
    const aylienCallMock = jest
      .fn()
      .mockResolvedValueOnce(responseOne)
      .mockResolvedValueOnce(responseTwo);

    return aylien.getImages(megaData, aylienCallMock).then((data) => {
      expect(aylienCallMock).toHaveBeenCalledTimes(2);
      expect(data).toEqual(expect.arrayContaining([responseOne, responseTwo]));
    });
  });
});
