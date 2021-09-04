Meteor.callWithPromise = (method, ...myParameters) => new Promise((resolve, reject) => {
  Meteor.call(method, ...myParameters, (err, res) => {
      if (err) reject(err);
      resolve(res);
  });
});

Meteor.startup(function() {
  FB.init({
    appId: '558450824874411',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v11.0'
  });
});