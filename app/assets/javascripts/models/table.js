Restaurant.Table = DS.Model.extend({
  items: DS.hasMany('item', {async: true})
});

Restaurant.Table.FIXTURES = [
  {
    id: 1
  },
  {
    id: 2,
    items: [1, 2]
  },
  {
    id: 3,
    items: [2, 2, 3]
  },
  {
    id: 4,
    items: [1, 4, 5]
  },
  {
    id: 5
  },
  {
    id: 6
  }
];
