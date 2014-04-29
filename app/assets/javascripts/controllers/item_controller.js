Restaurant.ItemsController = Ember.ArrayController.extend({
  needs: "table",
  table: Ember.computed.alias("controllers.table"),

  actions: {
    addItem: function(item) {
      var table = this.get('table').get('model');
      table.get('items').pushObject(item);
    }
  }
});
