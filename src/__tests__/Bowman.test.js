import Bowman from '../js/Bowman';

test('checking correct character creation', () => {
  const bowman = new Bowman('Nick');
  const expected = {
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});
