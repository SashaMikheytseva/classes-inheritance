import Swordsman from '../js/Swordsman';

test('checking correct character creation', () => {
  const swordsman = new Swordsman('Don');
  const expected = {
    name: 'Don',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});
