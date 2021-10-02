import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const routesAuth = FlowRouter.group({
  prefix: '/customer',
  name: 'customer',
  triggersEnter: [MustSignIn],
});

routesAuth.route('/customer-dashboard', {
  name: 'customer.dashboard',
  action: function (params, queryParams) {
    this.render('customerLayoutDefault', { page: 'customerPageDashboard' });
  }
});

routesAuth.route('/customer-products', {
  name: 'customer.products',
  action: function (params, queryParams) {
    this.render('customerLayoutDefault', { page: 'customerPageProducts' });
  }
});