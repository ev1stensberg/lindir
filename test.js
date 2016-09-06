const test = require('ava');
const Lindir = require('./index')

test('it should display a loading spinner', t => {
  
  const spinner = new Lindir('Loading stuff').start();

  setTimeout(() => {
      spinner.color = 'green';
      spinner.type = 'peace'
      spinner.text = 'Loading more stuff';
  }, 1000);

   t.pass()
});
