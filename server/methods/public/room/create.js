import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'public.room.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.room.create'],
  validate: new SimpleSchema({
    room: RoomSchema.omit('status')
  }).validator(),
  run: function (data) {
    this.unblock();
    const { room } = data

    room.status = 'opened';

    const id = Rooms.insert(room);
    return Rooms.findOne({ _id: id });
  }
});