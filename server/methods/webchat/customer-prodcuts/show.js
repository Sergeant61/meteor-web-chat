import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProdcut.show',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProdcut.read'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    return CustomerProdcuts.findOne({
      _id: _id
    });
  }
});


