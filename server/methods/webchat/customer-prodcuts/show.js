import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProduct.show',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.read'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    return CustomerProducts.findOne({
      _id: _id
    });
  }
});


