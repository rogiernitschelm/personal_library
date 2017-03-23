import assert from 'assert';
import { validUser } from './user_seeds';
import { User } from '../../../models';

describe('Removing a user', () => {
  let user;

  before(done => {
    user = new User(validUser);
    user.save()
      .then(() => done());
  });

  it('deletes a user with model instance remove.', done => {
    const email = user.email;

    user.remove()
      .then(() => User.findOne({ email }))
      .then(result => {
        assert(result === null);
        done();
      });
  });
});
