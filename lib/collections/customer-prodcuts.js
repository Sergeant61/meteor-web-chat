import SimpleSchema from "simpl-schema";

CustomerProdcuts = new Mongo.Collection("customer-prodcuts");

CustomerProductSettingSchema = new SimpleSchema({
  price: Number
});

CustomerProdcutSchema = new SimpleSchema({
  slug: String,

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

CustomerProdcuts.attachSchema(CustomerProdcutSchema);
CustomerProdcuts.softRemovable();
CustomerProdcuts.autoDates();
