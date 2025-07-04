import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // An artifical error to demonstrate error.js functioning
  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}
