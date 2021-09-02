SyncedCron.add({
  name: 'Fcm notification',
  schedule: function (parser) {
    return parser.text('every 10 minutes');
  },
  job: function () {

    
  }
});