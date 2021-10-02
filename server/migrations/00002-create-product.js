Migrations.add({
  version: 2,
  name: 'Product tanımlanıyor',
  up: function () {

    Products.insert({
      name: 'Live Chat',
      status: 'opened',
      properties: {
        price: 7.2
      },
    });

  }
});