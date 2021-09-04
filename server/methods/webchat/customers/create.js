import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customer.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.customer.create'],
  validate: new SimpleSchema({
    customer: CustomerSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { customer } = data

    const id = Customers.insert(customer);
    return Customers.findOne({ _id: id });
  }
});