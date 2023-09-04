import Undead from '../js/Undead';

test('checking correct character creation', () => {
  const undead = new Undead('Mike');
  const expected = {
    name: 'Mike',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});
