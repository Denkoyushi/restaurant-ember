Restaurant.Router.map(function() {
  this.resource('tables', { path: '/' }, function(){
    this.resource('table', {path: '/table/:id'}, function(){
      this.resource('items', { path: '/items'});
    });
  });
});
