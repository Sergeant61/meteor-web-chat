import SimpleSchema from "simpl-schema";

Products = new Mongo.Collection("products");

ProductPropertySchema = new SimpleSchema({
  price: Number
});

ProductSchema = new SimpleSchema({
  name: {
    type: String,
    max: 30,
    min: 5,
  },

  status: {
    type: String,
    allowedValues: ['opened', 'closed']
  },

  properties: {
    type: ProductPropertySchema,
    optional: true,
  },

  description: {
    type: String,
    optional: true,
  },
});

Products.attachSchema(ProductSchema);
Products.softRemovable();
Products.autoDates();
