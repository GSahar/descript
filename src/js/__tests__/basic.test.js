import getSpecial from '../basic';

test('test special', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 7,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 8,
        name: 'Оглушающий выстрел',
        icon: 'http://...',
        description: 'Выстрел оглушает противника на 10 секунд',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };

  const result = getSpecial(character);

  expect(result).toEqual(
    [
      [7, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'],
      [8, 'Оглушающий выстрел', 'http://...', 'Выстрел оглушает противника на 10 секунд'],
      [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'],
    ],
  );
});
