import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


Template.customerComponentNavbar.events({
  'click .brd-signout': function (event, template) {
    event.preventDefault();

    Loading.show();
    Meteor.logout(function () {
      FlowRouter.go(`public.home`);
      Loading.hide();
    });
  },

});
