'use strict';

// [[Prototype]] === __proto__
// console.log({});

// const Counter = function({ initialValue = 0, step = 1 }) {
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue;
//   this.step = step;

//   // return this;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 100, step: 15 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);

// console.log(counterA, counterB);

// Пример для дз
// const TodoEditor = function(todos = []) {
//   this.todos = todos;
// };

// TodoEditor.prototype.saveTodo = function(todo) {
//   this.todos.push(todo);
// };

// const todoEditor = new TodoEditor();
// todoEditor.saveTodo({ text: 'new todo' });
// console.log(todoEditor);

