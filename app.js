const argv = require('./config/yargs').argv;

const colors = require('colors');
           
              


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch(comando){
	case 'listar':
	
	listarTabla (argv.base, argv.limite);
	break;

	case 'crear':
	
	crearArchivo(argv.base, argv.limite)
     .then(archivo => console.log(`archivo creado: ${archivo.green}`))
     .catch(err => console.log(err));
	break;

	dafault:
	console.log('comando no reconocido');
}





//let argv = process.argv;

//let parametro = argv[2];

//let base = parametro.split('=')[1]
//console.log(base);

//let base = '5';

//console.log(process.argv);




//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(argv);


//crearArchivo(base)
  // .then(archivo => console.log(`archivo creado: ${archivo}`))
   //.catch(err => console.log(err));










