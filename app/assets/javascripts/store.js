// http://emberjs.com/guides/models/using-the-store/

Restaurant.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '_active-model'
});

Restaurant.ApplicationAdapter = DS.FixtureAdapter.extend();
