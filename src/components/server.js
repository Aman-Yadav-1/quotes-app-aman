const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/post', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
