import SimpleSchema from "simpl-schema";

Customers = new Mongo.Collection("customers");

CustomerSchema = new SimpleSchema({
  name: {
    type: String,
    max: 30,
    min: 5,
  },

  description: {
    type: String,
    optional: true,
  },
});

Customers.attachSchema(CustomerSchema);
Customers.softRemovable();
Customers.autoDates();
Customers.slugify({ field: 'name' });
