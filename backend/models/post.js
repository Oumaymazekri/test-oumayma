const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  titre: String,
  contenu: String,
});

module.exports = mongoose.model('Post', PostSchema);
