publishComposite('messages.byRoomId', function (roomId) {
  return {
    find() {

      const room = Rooms.findOne({ _id: roomId, status: 'opened' });

      if (!room) {
        return
      }

      return Messages.find({ roomId: roomId });
    },

    // children: [
    //   {
    //     find(customerProduct) {
    //       return Products.find({ _id: customerProduct.productId });
    //     }
    //   }
    // ]
  }
});