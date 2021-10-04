publishComposite('customerProdcuts.bySlug', function(slug) {
  return {
    find() {
      return CustomerProducts.find({ slug: slug });
    },

    children: [
      {
        find(customerProduct) {
          return Products.find({ _id: customerProduct.productId });
        }
      }
    ]
  }
});