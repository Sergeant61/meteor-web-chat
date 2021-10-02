import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'customer.customerProduct.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.create'],
  validate: new SimpleSchema({
    customerProduct: CustomerProductSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { customerProduct } = data

    const id = CustomerProducts.insert(customerProduct);
    return CustomerProducts.findOne({ _id: id });
  }
});