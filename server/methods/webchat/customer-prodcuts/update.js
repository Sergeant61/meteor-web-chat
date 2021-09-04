import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.customerProdcut.update',
  // mixins: [RoleMixin],
  // roles: ['permissions.customerProdcut.update'],
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    customerProdcut: CustomerProdcutSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { _id, customerProdcut } = data

    const id = CustomerProdcuts.update({ _id: _id }, {
      $set: customerProdcut
    });

    return CustomerProdcuts.findOne({ _id: id });
  }
});







