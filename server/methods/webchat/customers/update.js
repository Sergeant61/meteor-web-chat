import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customer.update',
  // mixins: [RoleMixin],
  // roles: ['permissions.customer.update'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    customer: CustomerSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { _id, customer } = data

    const id = Customers.update({ _id: _id }, {
      $set: customer
    });

    return Customers.findOne({ _id: id });
  }
});







