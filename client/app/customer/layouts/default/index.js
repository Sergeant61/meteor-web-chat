Template.customerLayoutDefault.events({
  'click #sidebarCollapse': function (event, template) {
    $('#sidebar, #content').toggleClass('active');
  },

  'click .brd-log-out': function (event, template) {
    event.preventDefault();
    Meteor.logout(function () {
      FlowRouter.go('public.home');
    });
  },
});
