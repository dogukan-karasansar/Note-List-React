var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/NoteListApiDb');

  mongoose.connection.on('open', () => {
    console.log('Mongo DB Bağlandı');
  });

  mongoose.connection.on('error', (err) => {
    console.log('Mongo DB Bağlantısı Başarısız. Sebebi: ', err);
  });

  mongoose.Promise = global.Promise;
};
