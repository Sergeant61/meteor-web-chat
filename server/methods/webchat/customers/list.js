import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customer.list',
  // mixins: [RoleMixin],
  // roles: ['permissions.customer.read'],
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    const { options } = data

    return FetchByIndex(Customers, {}, options, null);
  }
});
