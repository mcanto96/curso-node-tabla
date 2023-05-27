
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Recibe la base para la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limite para tabla '
    })
    .check( ( argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base debe de ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;
