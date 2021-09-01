Meteor.publish(null, function () {
  if (Meteor.userId()) {
    return Rooms.find({});
  }
});