import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.product.list',
  // mixins: [RoleMixin],
  // roles: ['permissions.product.read'],
  validate: new SimpleSchema({
    options: { type: QueryOptionsSchema, optional: true }
  }).validator(),
  run: function (data) {
    this.unblock();
    const { options } = data

    return FetchByIndex(Products, {}, options, null);
  }
});
