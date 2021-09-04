import SimpleSchema from "simpl-schema";

Messages = new Mongo.Collection("messages");

MessageReadUserSchema = new SimpleSchema({
  userId: SimpleSchema.RegEx.Id,
  createdAt: Date
});

MessageSchema = new SimpleSchema({

  slug: String,

  roomId: SimpleSchema.RegEx.Id,

  userId: SimpleSchema.RegEx.Id,

  type: {
    type: String,
    allowedValues: ['text', 'image', 'video', 'ptt', 'audio', 'location', 'document', 'sticker', 'media', 'template']
  },

  isRead: {
    type: Boolean,
    optional: true
  },

  isWhisper: {
    type: Boolean,
    optional: true
  },

  readUsers: {
    type: Array,
    optional: true
  },

  'readUsers.$': MessageReadUserSchema,

  payload: {
    type: Object,
    blackbox: true,
  }
});

Messages.attachSchema(MessageSchema);
Messages.softRemovable();
Messages.autoDates();