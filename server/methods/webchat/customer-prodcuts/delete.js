import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProdcut.delete',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProdcut.delete'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    CustomerProdcuts.remove({ _id: _id });
  }
});




