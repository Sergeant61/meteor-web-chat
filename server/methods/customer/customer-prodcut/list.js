import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'customer.customerProduct.list',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.read'],
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    const { options } = data

    const result = FetchByIndex(CustomerProducts, {}, options, null);

    result.data = result.data.map(customerProduct => {
      customerProduct.product = Products.findOne({ _id: customerProduct.productId });

      return customerProduct;
    });

    return result;
  }
});
