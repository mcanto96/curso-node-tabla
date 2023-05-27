
const fs     = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta ) => {
    try {
        
        let salida  = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} X ${i} = ${base * i}\n`);
            consola += (`${base} ${'X'.red } ${i} = ${base * i}\n`);
        }
        
        if ( listar ) {
            console.log('=============='.green);
            console.log(`Tabla del: ${base}`);
            console.log('=============='.green);
            console.log( consola );
        }
        
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida );
        
    } catch (err) {
        throw err;
    }

    return `Tabla del ${base} creada`;
}

module.exports = {
    crearArchivo
}




