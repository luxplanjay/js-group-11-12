'use strict';

/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const findPersonWithMaxTasks = function(stats) {
  // console.log('stats: ', stats);
  let max = 0;
  let name;

  // Object.entries
  const keys = Object.keys(stats);

  for (const key of keys) {
    if (max < stats[key]) {
      max = stats[key];
      name = key;
    }
  }

  return {
    name,
    tasksCompleted: max,
  };
};

console.log(
  findPersonWithMaxTasks({
    ann: 29,
    david: 35,
    helen: 111,
    lorence: 99,
  }),
);

console.log(
  findPersonWithMaxTasks({
    ann: 129,
    david: 35,
    helen: 111,
    lorence: 99,
  }),
);
