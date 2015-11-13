if (Meteor.isClient) {

  Template.hello.onRendered(function() {

    // flip 1
    this.flip1 = new Flipload(this.find('#example1'));

    // flip2
    this.flip2 = new Flipload(this.find('#example2'), {
      'line': 'horizontal',
    });
  });

  Template.hello.events({
    'click #example1': function(event, template) {

      template.flip1.load();

      // auto done
      Meteor.setInterval(function() {

        template.flip1.done();
      }, 5000);
    },

    'click #example2': function(event, template) {

      // load flip2
      template.flip2.load();

      // flip1 done
      template.flip1.done();


      // auto done
      Meteor.setInterval(function() {

        template.flip2.done();
      }, 5000);
    }
  });
}
