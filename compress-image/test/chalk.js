const http = require('http');
http.createServer().listen(3001);

const os = require('os')


const chalk = require('chalk');
const log = (...info) => {
	console.log('\n', ...info);
};

log(chalk.red('红色'), chalk.blue.bgGreenBright.bold('蓝色', 'World!'));

log(
	chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') + ' that becomes green again!')
);

log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
`);

// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);


log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));


const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 

console.log(error('Error!'));
console.log(warning('Warning!'));


const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

