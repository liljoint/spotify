const Spotify = require('node-spotify-api');

const {SPOTIFY} = require('config');

const spotify = new Spotify({
  id: SPOTIFY.CLIENT_ID,
  secret: SPOTIFY.CLIENT_SECRET,
});

const search = async (query) => {
  try {
    const finded = await spotify.search({
      type: 'track',
      query: query,
    });
    console.log(finded.tracks.items[0]);
    return finded.tracks.items.map((value) => {
      return {
        name: value.name,
        artist: value.artists[0].name,
        album: value.album.name,
      };
    });
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = search;
