Template.productPageLiveChat.helpers({
  room: function () {
    return Rooms.findOne({});
  },
  messages: function () {
    return Messages.find({});
  }
});

Template.productPageLiveChat.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('rooms');

    const roomId = localStorage.getItem('roomId');

    console.log(roomId);
    if (!roomId) {
      return
    }

    Loading.show();
    self.roomSubscription = Meteor.subscribe('rooms.byId', roomId, {
      onReady: function () {
        Loading.hide();
      },
      onError: function () {
        Loading.hide();
        console.log("onError", arguments)
      }
    });
  });

  this.autorun(function () {
    AppUtil.refreshTokens.get('messages');

    const room = Rooms.findOne({});

    if (!room) {
      return
    }

    Loading.show();
    self.messageSubscription = Meteor.subscribe('messages.byRoomId', room._id, {
      onReady: function () {
        Loading.hide();
      },
      onError: function () {
        Loading.hide();
        console.log("onError", arguments)
      }
    });
  });

});

Template.productPageLiveChat.events({
  'click .brd-room-start': function (event, template) {
    event.preventDefault();

    const customerProduct = CustomerProducts.findOne({});

    if (!customerProduct) {
      //TODO ErrorHandler
      return
    }

    const userId = Random.id();

    const obj = {
      room: {
        slug: customerProduct.slug,
        customerProductId: customerProduct._id,
        userId: userId,
        userIds: [userId],
      }
    }

    Loading.show();
    Meteor.call('public.room.create', obj, function (error, result) {
      Loading.hide();

      if (error) {
        ErrorHandler.show(error)
        return;
      }

      localStorage.setItem('roomId', result._id);
      AppUtil.refreshTokens.set('rooms', Random.id());
    });
  }
});

Template.productPageLiveChat.onDestroyed(function () {
  this.roomSubscription?.stop();
  this.messageSubscription?.stop();
});