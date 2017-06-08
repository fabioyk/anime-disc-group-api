var request = require('request');
const snoowrap = require('snoowrap');

var reddit = {
  r: {},
  init() {
    reddit.r = new snoowrap({
      userAgent: 'web:com.fabioyk.anime-disc-group:v0.0.1 (by /u/fabioyk)',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    });
    
  },
  
  fetchRecentDiscussions(callback) {
    reddit.r.getSubreddit('anime').search({
      query: '[Spoilers] Episode Discussion MyAnimeList',
      sort: 'new',
      time: 'day'
    }).then((posts) => {
      callback(null, posts);
    });
  },
  
};

module.exports = reddit;