import { expect, test } from '@jest/globals';
import Person from '../Person';
import Team from '../Team';

test('', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const person1 = new Person(char);
  const person2 = new Person(char);
  const person3 = new Person(char);
  const obj = new Team([person1, person2, person3]);
  const generator = obj[Symbol.iterator]();
  generator.next();
  const received = obj.team[1];
  expect(received).toEqual(generator.next().value);
});

test('', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const person1 = new Person(char);
  const person2 = new Person(char);
  const person3 = new Person(char);
  const obj = new Team([person1, person2, person3]);
  const generator = obj[Symbol.iterator]();
  generator.next();
  generator.next();
  generator.next();
  generator.next();
  const received = generator.next().done;
  expect(received).toBe(true);
});
