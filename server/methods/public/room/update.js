import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'public.room.updateStatus',
  // mixins: [RoleMixin],
  // roles: ['permissions.room.update'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    status: String
  }).validator(),
  run: function (data) {
    this.unblock();
    const { _id, status } = data

    const id = Rooms.update({ _id: _id }, {
      $set: {
        status: status
      }
    });

    return Rooms.findOne({ _id: id });
  }
});







