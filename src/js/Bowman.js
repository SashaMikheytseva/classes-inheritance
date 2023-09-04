import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
