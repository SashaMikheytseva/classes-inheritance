import Magician from '../js/Magician';

test('checking correct character creation', () => {
  const magician = new Magician('Ron');
  const expected = {
    name: 'Ron',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});
