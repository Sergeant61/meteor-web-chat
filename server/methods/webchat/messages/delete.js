import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.message.delete',
  // mixins: [RoleMixin],
  // roles: ['permissions.message.delete'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    Messages.remove({ _id: _id });
  }
});




