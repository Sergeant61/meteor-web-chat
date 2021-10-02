import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProduct.update',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.update'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    customerProduct: CustomerProductSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { _id, customerProduct } = data

    const id = CustomerProducts.update({ _id: _id }, {
      $set: customerProduct
    });

    return CustomerProducts.findOne({ _id: id });
  }
});







