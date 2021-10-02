import bootstrap from "bootstrap";

Template.customerModalCustomerProductCreate.onCreated(function () {
  this.state = new ReactiveDict(null, {
    products: []
  })
});

Template.customerModalCustomerProductCreate.onRendered(function () {
  const self = this;

  const modalElement = document.getElementById('brdCustomerModalCustomerProductCreateModal');
  this.modal = new bootstrap.Modal(modalElement);

  modalElement.addEventListener('hidden.bs.modal', function (event) {
    self.$('#brdCustomerModalCustomerProductCreateForm').trigger("reset");
    AppUtil.temp.set('customerProduct', null);
  });

  this.autorun(function () {

    LoadingLine.show()
    Meteor.call('customer.product.list', {}, function (error, result) {
      LoadingLine.hide()

      if (error) {
        ErrorHandler.show(error)
        return;
      }

      console.log(result);
      self.state.set('products', result.data);
    });
  });
});

Template.customerModalCustomerProductCreate.events({
  'submit #brdCustomerModalCustomerProductCreateForm': function (event, template) {
    event.preventDefault()
    ErrorHandler.reset(template);

    const data = AppUtil.temp.get('customerProduct');

    const name = event.target.name.value;
    const productId = event.target.productId.value;

    const obj = {
      customerProduct: {
        name: name,
        productId: productId,
      }
    }



    LoadingSection.show(template, '.brd-loading-modal');

    if (data) {

      obj._id = data._id

      Meteor.call('customer.customerProduct.update', obj, function (error, result) {
        LoadingSection.hide(template, '.brd-loading-modal');
        if (error) {
          ErrorHandler.show(error, template);
          return;
        }

        SwalUtil.update(function () {
          template.modal.hide();
          AppUtil.refreshTokens.set('customerProducts', Random.id())
        });
      });

    } else {
      Meteor.call('customer.customerProduct.create', obj, function (error, result) {
        LoadingSection.hide(template, '.brd-loading-modal');
        if (error) {
          ErrorHandler.show(error, template);
          return;
        }

        SwalUtil.add(function () {
          template.modal.hide();
          AppUtil.refreshTokens.set('customerProducts', Random.id())
        });
      });
    }
  }
});