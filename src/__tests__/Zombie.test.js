import Zombie from '../js/Zombie';

test('checking correct character creation', () => {
  const zombie = new Zombie('Arrr');
  const expected = {
    name: 'Arrr',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});
