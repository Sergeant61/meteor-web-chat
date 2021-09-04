import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customer.show',
  // mixins: [RoleMixin],
  // roles: ['permissions.customer.read'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    return Customers.findOne({
      _id: _id
    });
  }
});


