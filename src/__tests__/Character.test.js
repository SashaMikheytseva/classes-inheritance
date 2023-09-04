import Bowman from '../js/Bowman';
import Character from '../js/Character';

test('testing for invalid name', () => {
  expect(() => new Character(12, 'Undead')).toThrowError('Некорректное значение имени персонажа');
  expect(() => new Character('Y', 'Undead')).toThrowError('Некорректное значение имени персонажа');
  expect(() => new Character('MoreLettersThanNeeded', 'Undead')).toThrowError('Некорректное значение имени персонажа');
});

test('testing for invalid type', () => {
  expect(() => new Character('Pete', 'Hobbit')).toThrowError('Некорректное значение типа персонажа');
});

test('testing levelup', () => {
  const undead = new Character('Peter', 'Undead');
  undead.health = 0;
  expect(() => undead.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа');

  const bowman = new Bowman('Kit');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
});

test('testing damage', () => {
  const bowman = new Bowman('Luke');
  bowman.damage(15);
  const expected = {
    name: 'Luke',
    type: 'Bowman',
    health: 88.75,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);

  const char = new Character('Bob', 'Bowman');
  char.health = -1;
  expect(() => char.damage(7)).toThrowError('Персонаж мертв');
});
