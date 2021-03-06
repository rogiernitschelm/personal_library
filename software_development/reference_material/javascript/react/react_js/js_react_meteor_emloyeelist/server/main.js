// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers} from 'faker';


Meteor.startup(() => {
  // generate data

  // see if collection has any records
  const numberRecords = Employees.find({}).count();

  // if no data exists..
  if (!numberRecords){
    //..generate some data
    _.times(5000, () => {
      // equal to: const name = helpers.createCard().name;  etc
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});
