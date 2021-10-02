import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.customerPageProducts.onCreated(function () {
  this.state = new ReactiveDict(null, {
    customerProducts: [],
    notFound: false
  });

  this.pagination = new ReactiveDict(null, {
    currentPage: 1,
    pageItems: 10,
    totalCount: 0,
    totalPages: 0
  });

  this.sorting = new ReactiveDict(null, {
    sortField: 'createdAt',
    sortOrder: 'desc'
  });

  this.filtering = new ReactiveDict(null, {});
});

Template.customerPageProducts.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('customerProducts');

    const currentPage = self.pagination.get('currentPage');
    const pageItems = self.pagination.get('pageItems');
    const filtering = self.filtering.all();
    const sorting = self.sorting.all();

    const obj = {
      options: {
        pagination: {
          currentPage: currentPage,
          pageItems: pageItems
        },
        filtering: filtering,
        sorting: sorting
      }
    };

    LoadingLine.show()
    Meteor.call('customer.customerProduct.list', obj, function (error, result) {
      LoadingLine.hide()

      if (error) {
        ErrorHandler.show(error)
        return;
      }

      console.log(result);
      self.state.set('customerProducts', result.data);
      self.state.set('notFound', result.options.pagination.totalCount === 0);
      self.pagination.set('currentPage', result.options.pagination.currentPage);
      self.pagination.set('pageItems', result.options.pagination.pageItems);
      self.pagination.set('totalCount', result.options.pagination.totalCount);
      self.pagination.set('totalPages', result.options.pagination.totalPages);
    });
  });
});

Template.customerPageProducts.events({
  'click .brd-customerProduct-update': function (event, template) {
    event.preventDefault();
    AppUtil.temp.set('customerProduct', this.data);
    $('#brdCustomerModalCustomerProductCreateModal').modal('show');
  },

  'click .brd-customerProduct-remove': function (event, template) {
    event.preventDefault();

    const controlMenu = this;

    SwalUtil.deleteAreYouSure(function (r) {
      if (r.isConfirmed) {

        LoadingLine.show()
        Meteor.call('customer.customerProduct.delete', { _id: controlMenu.data._id }, function (error, result) {
          LoadingLine.hide()

          if (error) {
            ErrorHandler.show(error)
            return;
          }

          AppUtil.refreshTokens.set('customerProducts', Random.id());
        });
      }
    })
  },
});