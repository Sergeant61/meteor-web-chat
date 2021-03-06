import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProduct.list',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProduct.read'],
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    const { options } = data

    return FetchByIndex(CustomerProducts, {}, options, null);
  }
});
