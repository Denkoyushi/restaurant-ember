Restaurant.Item = DS.Model.extend({
  description: DS.attr(),
  price: DS.attr('number'),
  tables: DS.hasMany('table', {async: true})
});

Restaurant.Item.FIXTURES = [
  {
    id: 1,
    description: 'milkshake',
    price: 4.50
  },
  {
    id: 2,
    description: 'bacon cheeseburger',
    price: 5.90
  },
  {
    id: 3,
    description: 'vegan cupcake',
    price: 3.75
  },
  {
    id: 4,
    description: 'fish & chips',
    price: 9.00
  },
  {
    id: 5,
    description: 'kale salad',
    price: 3.25
  }
];
