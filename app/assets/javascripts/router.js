Restaurant.Router.map(function() {
  this.resource('tables', { path: '/' });
  this.resource('items', {path: '/items'});
});
