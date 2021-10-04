import SimpleSchema from 'simpl-schema';

const truncateString = function (str, num) {
  if (!str) {
    return str;
  }
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
};

new ValidatedMethod({
  name: 'public.message.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.message.create'],
  validate: new SimpleSchema({
    message: MessageSchema.omit('slug', 'userId')
  }).validator(),
  run: function (data) {
    this.unblock();
    const { message } = data

    const roomId = message.roomId;

    const room = Rooms.findOne({ _id: roomId, status: 'opened' });

    if (!room) {
      // TODO: ErrorHandler
      return
    }

    message.slug = room.slug;
    message.userId = room.userId;

    const id = Messages.insert(message);
    return Messages.findOne({ _id: id });
  }
});