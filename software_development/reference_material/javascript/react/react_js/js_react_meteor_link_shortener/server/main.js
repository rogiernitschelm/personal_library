import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  })
});


//executed whenever a user visits with a route
// 'localhost:3000/abcdetc'
function onRoute(req, res, next) {
  //take token out of url and find matching link in links collection
  const link = Links.findOne({ token: req.params.token });

  if (link) {

    Links.update(link, {$inc: { clicks: 1 }} );
    res.writeHead(307, { 'Location': link.url });
    res.end();

  } else {
    // when link is found, send user there. Otherwise send user to
    // normal react app.
    next();

  }

}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
