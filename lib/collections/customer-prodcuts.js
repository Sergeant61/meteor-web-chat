import SimpleSchema from "simpl-schema";

CustomerProducts = new Mongo.Collection("customer-products");

CustomerProductSettingSchema = new SimpleSchema({
  price: Number
});

CustomerProductSchema = new SimpleSchema({
  productId: SimpleSchema.RegEx.Id,

  settings: {
    type: CustomerProductSettingSchema,
    optional: true,
  },

  name: String,

  description: {
    type: String,
    optional: true,
  },
});

CustomerProducts.attachSchema(CustomerProductSchema);
CustomerProducts.softRemovable();
CustomerProducts.autoDates();
CustomerProducts.slugify({ field: 'name' });

