export const name = 'create-user';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'simpl-schema': '1.12.0'
}, 'bordo:create-user');

const SimpleSchema = require('simpl-schema');
SimpleSchema.extendOptions(['denyUpdate']);

const _schema = new SimpleSchema({
  createdUserId: {
    type: SimpleSchema.RegEx.Id,
    autoValue: function () {
      try {
        if (Meteor.userId()) {
          return Meteor.userId()
        }
      } catch (error) {
        console.log('Veri kullanıcı kaydı olmadan kayıt edildi.');
      }
    },
    optional: true
  }
});

Mongo.Collection.prototype.createdUser = function () {
  const collection = this;
  collection.attachSchema(_schema);
};
