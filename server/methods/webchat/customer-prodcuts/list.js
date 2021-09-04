import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProdcut.list',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProdcut.read'],
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    const { options } = data

    return FetchByIndex(CustomerProdcuts, {}, options, null);
  }
});
