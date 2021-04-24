import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      firstName: 'Саяжан',
      lastName: 'Онласын',
      email: 'sayazhan.onlassyn@mail.ru',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Азат',
      lastName: 'Кажимухан',
      email: 'azatuk2005@mail.ru',
      password: 'password',
    },
    {
      id: 3,
      firstName: 'Карбек',
      lastName: 'Алиев',
      email: 'kara@mail.ru',
      password: 'password',
    },
    {
      id: 4,
      firstName: 'Иван',
      lastName: 'Бессонов',
      email: 'vanya@mail.ru',
      password: 'password',
    },
    {
      id: 5,
      firstName: 'Оксана',
      lastName: 'Иванова',
      email: 'oksana1975@mail.ru',
      password: 'password',
    },
    {
      id: 6,
      firstName: 'Артем',
      lastName: 'Голубев',
      email: 'artem@mail.ru',
      password: 'password',
    },
    {
      id: 7,
      firstName: 'Сергей',
      lastName: 'Рыбалкин',
      email: 'loverybalka@gmail.com',
      password: 'password',
    },
    {
      id: 8,
      firstName: 'Айлара',
      lastName: 'Светланова',
      email: 'ailara12345@mail.ru',
      password: 'password',
    },
    {
      id: 9,
      firstName: 'Аружан',
      lastName: 'Бесекова',
      email: 'aryka2003@mail.ru',
      password: 'password',
    },
    {
      id: 10,
      firstName: 'Амир',
      lastName: 'Албеков',
      email: 'amir@mail.ru',
      password: 'password',
    },
  ]);
}
