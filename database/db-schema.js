var mongoose = require('mongoose');

var schemas = {   
  animeSchema: new mongoose.Schema({
    _id: { type: Number, index: true },
    title: String,
    alternativeTitles: [String],
    synopsis: String,
    episodes: Number,
    year: Number,
    season: Number,
    discussions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discussion' }],
    wts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WT' }],
  }),
  
  discussionSchema: new mongoose.Schema({
    anime: { type: Number, ref: 'Anime', index: true },
    episode: String,
    link: String,
    creationDate: Date,
  }),
  
  wtSchema: new mongoose.Schema({
    anime: { type: Number, ref: 'Anime', index: true },
    link: String,
    creator: String,
  }),
  
  Anime: null,
  Discussion: null,
  WT: null,
  
  init() {
    this.Anime = mongoose.model('Anime', this.animeSchema);
    this.Discussion = mongoose.model('Discussion', this.discussionSchema);
    this.WT = mongoose.model('WT', this.wtSchema);
    
  }
};

module.exports = schemas;