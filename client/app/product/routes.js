import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/live-chat/:slug', {
  name: 'product.live-chat',
  action: function (params, queryParams) {
    this.render('productLayoutDefault', { page: 'productPageLiveChat' });
  },
  subscriptions: function (params, queryParams) {
    this.register('customerProdcuts.bySlug', Meteor.subscribe('customerProdcuts.bySlug', params.slug ));
  }
});