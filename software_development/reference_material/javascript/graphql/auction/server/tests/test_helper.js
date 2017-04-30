import mongoose from 'mongoose';

before(() => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/auction_tests');
  mongoose.connection
    .once('open', () => console.log('Ready for testing.'))
    .on('error', error => {
      console.warn('An error occured.', error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() =>{
    done();
  });
});
