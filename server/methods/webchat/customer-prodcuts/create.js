import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProdcut.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProdcut.create'],
  validate: new SimpleSchema({
    customerProdcut: CustomerProdcutSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { customerProdcut } = data

    const id = CustomerProdcuts.insert(customerProdcut);
    return CustomerProdcuts.findOne({ _id: id });
  }
});