import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'customer.customerProduct.delete',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.delete'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    CustomerProducts.remove({ _id: _id });
  }
});




