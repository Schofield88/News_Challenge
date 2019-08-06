function Aylien() {
  function makeMeANewsArray(megaArray) {
    const articleArray = megaArray.map((news) => {
      const { webTitle, webUrl } = news;
      const titleAndUrl = {
        webTitle,
        webUrl,
      };
      return titleAndUrl;
    });
    return articleArray;
  }

  return Object.freeze({ makeMeANewsArray });
}

module.exports = Aylien;
