Template.productComponentNavbarBottom.events({
  'submit form#brdProductComponentNavbarBottomForm': function (event, template) {
    event.preventDefault();

    const room = Rooms.findOne({});
    const message = event.target.message.value;

    const obj = {
      message:{
        roomId: room._id,
        type: 'text',
        payload: {
          text: message
        }
      }
    }

    Loading.show();
    Meteor.call('public.message.create', obj, function (error, result) {
      Loading.hide();

      if (error) {
        ErrorHandler.show(error)
        return;
      }

      event.target.reset();
    });
  }
});