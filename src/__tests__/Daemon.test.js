import Daemon from '../js/Daemon';

test('checking correct character creation', () => {
  const daemon = new Daemon('Rick');
  const expected = {
    name: 'Rick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});
