import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.product.delete',
  // mixins: [RoleMixin],
  // roles: ['permissions.product.delete'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    Products.remove({ _id: _id });
  }
});




