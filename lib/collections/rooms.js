import SimpleSchema from "simpl-schema";

Rooms = new Mongo.Collection("rooms");

RoomUserSchema = new SimpleSchema({
  userId: SimpleSchema.RegEx.Id,
  firstName: String,
  lastName: String,
});

RoomSchema = new SimpleSchema({
  slug: String,

  customerProductId: SimpleSchema.RegEx.Id,

  userId: SimpleSchema.RegEx.Id,

  userIds: {
    type: Array,
    optional: true
  },

  'userIds.$': SimpleSchema.RegEx.Id,

  assignedUserId: {
    type: SimpleSchema.RegEx.Id,
    optional: true
  },

  lastMessageDate: {
    type: Date,
    optional: true
  },

  lastMessagePreview: {
    type: String,
    optional: true
  },

  lastSendByUser: {
    type: RoomUserSchema,
    optional: true
  },

  status: {
    type: String,
    allowedValues: ['opened', 'closed']
  },
});

Rooms.attachSchema(RoomSchema);
Rooms.softRemovable();
Rooms.autoDates();