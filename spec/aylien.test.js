import Aylien from '../src/aylien';

describe('Aylien', () => {
  it('makeMeANewsArray() builds a an array of titles and urls', () => {
    expect.assertions(2);
    const aylien = new Aylien();
    const megaData = [
      {
        id: 'sport/2019/aug/06/england-ashes-test-grounds-splendour-cricket',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-06T11:24:35Z',
        webTitle:
          'If only England could match the '
          + 'splendour of their Ashes Test grounds | '
          + 'The Spin',
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
      {
        id: 'sport/blog/2019/aug/06/mercedes-lewis-hamilton-red-bull-valtteri-bottas-carlos-sainz',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-06T09:00:14Z',
        webTitle: 'Mercedes show their daring side to keep F1 thrill factor cranked up high',
        webUrl:
          'https://www.theguardian.com/sport/blog/2019/aug/06/mercedes-lewis-hamilton-red-bull-valtteri-bottas-carlos-sainz',
        apiUrl:
          'https://content.guardianapis.com/sport/blog/2019/aug/06/mercedes-lewis-hamilton-red-bull-valtteri-bottas-carlos-sainz',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id:
          'sport/2019/aug/06/jimmy-anderson-out-of-second-ashes-test-and-doubtful-for-rest-of-series',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-06T08:30:13Z',
        webTitle: 'Jimmy Anderson out of second Ashes Test and doubtful for rest of series',
        webUrl:
          'https://www.theguardian.com/sport/2019/aug/06/jimmy-anderson-out-of-second-ashes-test-and-doubtful-for-rest-of-series',
        apiUrl:
          'https://content.guardianapis.com/sport/2019/aug/06/jimmy-anderson-out-of-second-ashes-test-and-doubtful-for-rest-of-series',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id:
          'sport/blog/2019/aug/06/talking-horses-what-does-french-racing-tell-us-about-female-jockeys',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-06T08:20:07Z',
        webTitle: 'Talking Horses: what does French racing tell us about female jockeys?',
        webUrl:
          'https://www.theguardian.com/sport/blog/2019/aug/06/talking-horses-what-does-french-racing-tell-us-about-female-jockeys',
        apiUrl:
          'https://content.guardianapis.com/sport/blog/2019/aug/06/talking-horses-what-does-french-racing-tell-us-about-female-jockeys',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id: 'sport/2019/aug/05/miami-marlins-steve-irwin-tampa-bay-rays-death-mlb-baseball',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-05T19:06:14Z',
        webTitle: 'Miami Marlins apologise for blaming rival Rays for death of Steve Irwin',
        webUrl:
          'https://www.theguardian.com/sport/2019/aug/05/miami-marlins-steve-irwin-tampa-bay-rays-death-mlb-baseball',
        apiUrl:
          'https://content.guardianapis.com/sport/2019/aug/05/miami-marlins-steve-irwin-tampa-bay-rays-death-mlb-baseball',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id: 'sport/blog/2019/aug/05/england-red-faces-neglecting-test-cricket-ashes-australia',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-05T19:00:55Z',
        webTitle:
          'England left with red faces after '
          + 'neglecting Test cricket for years | '
          + 'Barney Ronay',
        webUrl:
          'https://www.theguardian.com/sport/blog/2019/aug/05/england-red-faces-neglecting-test-cricket-ashes-australia',
        apiUrl:
          'https://content.guardianapis.com/sport/blog/2019/aug/05/england-red-faces-neglecting-test-cricket-ashes-australia',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id: 'sport/2019/aug/05/too-darn-hot-leg-injury-sussex-dewhurst-stakes',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-05T18:59:35Z',
        webTitle: 'Too Darn Hot suffers career-ending leg injury at Goodwood',
        webUrl:
          'https://www.theguardian.com/sport/2019/aug/05/too-darn-hot-leg-injury-sussex-dewhurst-stakes',
        apiUrl:
          'https://content.guardianapis.com/sport/2019/aug/05/too-darn-hot-leg-injury-sussex-dewhurst-stakes',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id: 'sport/2019/aug/05/joe-root-england-kneejerk-australia-first-test-defeat',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-05T18:35:00Z',
        webTitle: 'Joe Root says England will not make kneejerk decisions after Test rout',
        webUrl:
          'https://www.theguardian.com/sport/2019/aug/05/joe-root-england-kneejerk-australia-first-test-defeat',
        apiUrl:
          'https://content.guardianapis.com/sport/2019/aug/05/joe-root-england-kneejerk-australia-first-test-defeat',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
      {
        id: 'sport/blog/2019/aug/05/nathan-lyon-australia-moeen-ali-england-spinner-ashes',
        type: 'article',
        sectionId: 'sport',
        sectionName: 'Sport',
        webPublicationDate: '2019-08-05T18:00:55Z',
        webTitle:
          'No-frills Nathan Lyon shows Moeen Ali how '
          + 'to take match by the throat | Geoff Lemon',
        webUrl:
          'https://www.theguardian.com/sport/blog/2019/aug/05/nathan-lyon-australia-moeen-ali-england-spinner-ashes',
        apiUrl:
          'https://content.guardianapis.com/sport/blog/2019/aug/05/nathan-lyon-australia-moeen-ali-england-spinner-ashes',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport',
      },
    ];
    const aylienKnowledge = aylien.makeMeANewsArray(megaData);

    expect(aylienKnowledge[0]).toHaveProperty('webTitle');
    expect(aylienKnowledge[0]).toHaveProperty('webUrl');
  });
});
