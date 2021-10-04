Template.productComponentNavbar.helpers({
  customerProduct: function () {
    return CustomerProducts.findOne({});
  },
  room: function () {
    return Rooms.findOne({});
  }
});

Template.productComponentNavbar.events({
  'click .brd-room-stop': function (event, template) {
    event.preventDefault();

    const room = Rooms.findOne({});

    const obj = {
      _id: room._id,
      status: 'closed',
    }

    Loading.show();
    Meteor.call('public.room.updateStatus', obj, function (error, result) {
      Loading.hide();

      if (error) {
        ErrorHandler.show(error)
        return;
      }

    });
  }
});