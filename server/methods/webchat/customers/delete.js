import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customer.delete',
  // mixins: [RoleMixin],
  // roles: ['permissions.customer.delete'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    Customers.remove({ _id: _id });
  }
});




