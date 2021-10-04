publishComposite('rooms.byId', function (_id) {
  return {
    find() {
      return Rooms.find({ _id: _id, status: 'opened' });
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