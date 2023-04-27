const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});

const despido = (nombre) => {
  if(typeof nombre === 'string') {
    return `Adios ${nombre}`
  } else {
    logger.log({
      level: 'error',
      message: `El parámetro pasado a la función despido no es un string: ${nombre}`
    });
    throw new Error('El parámetro pasado a la función despido no es un string');
  }
}

const nombre = 1;

try {
  console.log(despido(nombre));
} catch(error) {
  console.log('Si claro pues te jodes porque ' + error);
}

despido(nombre);
