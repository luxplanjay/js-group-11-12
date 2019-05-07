/*
 * GlovalEnv: {parentEnv: null}
 */

// [Environment]: GlovalEnv
const greet = function(message) {
  /*
   * greetEnv: {parentEnv: GlovalEnv, message: ''}
   */

  // [Environment]: greetEnv
  return function(name) {
    /*
     * anonEnv: {parentEnv: greetEnv, name: ''}
     */
    console.log(`${message} ${name}`);
  };
};

/*
 * GlovalEnv: {parentEnv: null, greet: f}
 */

const greetMale = greet('Добро пожаловать мистер');
/*
 * GlovalEnv: {parentEnv: null, greet: f, greetMale: f}
 */

greetMale('Mango');
greetMale('Ajax');

const greetFemale = greet('Привет миссис');
greetFemale('Poly');
greetFemale('Chelsy');

// greet('Добро пожаловать мистер', 'Mango');
// greet('Добро пожаловать мистер', 'Ajax');
// greet('Привет миссис', 'Poly');
// greet('Привет миссис', 'Chelsy');
