import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'webchat.product.create',
  // mixins: [RoleMixin],
  // roles: ['permissions.product.create'],
  validate: new SimpleSchema({
    product: ProductSchema
  }).validator(),
  run: function (data) {
    this.unblock();
    const { product } = data

    const id = Products.insert(product);
    return Products.findOne({ _id: id });
  }
});