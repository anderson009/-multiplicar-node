const fs = require('fs');
const colors = require('colors');



   let listarTabla = (base, limite = 10) =>{


   	console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

   	for (var i = 1; i <= limite; i++) {
   		     console.log(`${base} * ${i} = ${base*i}`);
            }

   }



   let crearArchivo = (base, limite = 10) =>{
   	return new Promise( (resolve, reject) =>{

   		if (! Number(base) ) {
   			reject(`el valor ingresado no es un numero ${base}`);
   			return;
   		}

   		let data = '';

         	for (var i = 1; i <= limite; i++) {
   		       data += `${base} * ${i} = ${base*i}\n`;
            }

   		 fs.writeFile(`tabla multiplicar/tabla-${base}.txt`, data, (err) =>{
   		 	if (err) reject(err)

   		 	else resolve(`tabla-${base}.txt`)


   		 })
   	
   	})
   }

                

module.exports = {
	crearArchivo,
	listarTabla
}