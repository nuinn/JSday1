// alert("Javascript funcionando correctamente");

//VARIABLES
let variableSinValor;
console.log(variableSinValor)
let booleano1 = true;
console.log(booleano1);
let booleano2 = false;
console.log(booleano2);
const PI = 3.14;
console.log(PI);
const TAU = PI*2;
console.log(TAU);
const miNombre = "Marc";
console.log(miNombre);
const miNumeroFav = 22;
console.log(miNumeroFav);
let tipoBooleano = true;
console.log(tipoBooleano);
console.log(miNombre.length);
console.log(typeof miNumeroFav);
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);
let crack = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(crack.toUpperCase());
let crack2 = "Hola soy un crack"
console.log(crack2.substring(0,5));
console.log(typeof miNumeroFav.toString());
const status = "DONE";
const fullStatus = `This activity is ${status}`;
console.log(fullStatus);
console.log(PI.toFixed(2));

//ARRAYS
const arrayVacio = [];
console.log(arrayVacio);
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9,];
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arrayNumeros, arrayNumeros2);
const arrayNumerosPares = [0,2,4,6,8];
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log(arrayNumerosPares, arrayNumerosNeg);
const holaMundo = ["Hola","Mundo"];
const loGuardoTodo = ['hola','que',23,42.33,'tal'];
const arrayDeArrays = [[756,'nombre'],[223,'apellido'],[298,'dirección']];
console.log(holaMundo,loGuardoTodo,arrayDeArrays);
console.log(loGuardoTodo.length);
const nuevoElemento = "I'm a new element. Hello.";
loGuardoTodo.push(nuevoElemento);
console.log(loGuardoTodo);
console.log(loGuardoTodo[loGuardoTodo.indexOf("que")]);
loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

//Objetos
const Coche = {
    marca: 'Toyota',
modelo: 'Yaris',
matrícula: '9375FZD',};
console.log(Coche);
const Casa = {
    codPostal: 41003,
    calle: 'San Luis',
    portal: 105,
    piso: 3,
};
console.log(Casa);
const FullStackDeveloper = {
    lenguajes: ['javascript', 'CSS', 'HTML', 'python'],
    proyectos: ['mi página persona', 'banderas', 'carta', 'hangman'],
};
console.log(FullStackDeveloper);
const Perro = {
    nombre: 'Aria',
    raza: 'perro de agua',
    color: 'blanquimarrón',
    edad: 5,
};
console.log(Perro);
const Noticia = {
    títular: "Breaking News",
    cuerpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima doloribus quos aliquam ea magnam cum quasi eos, delectus illo. Quas placeat optio natus fugiat itaque ducimus incidunt totam iste?",
};
console.log(Noticia);
const Persona = {
nombre: "John",
apellido: "Doe",
edad: 44,
};
console.log(Persona);
console.log(Persona.nombre);
console.log(FullStackDeveloper.lenguajes[FullStackDeveloper.lenguajes.indexOf('javascript')]);
const Portatil = {
    marca: 'Apple',
};
console.log(Portatil.marca);
console.log(Portatil['marca']);
const Concierto = {
    grupos: ["Led Zeppelin","Radiohead","Blur"]
}
console.log(Concierto.grupos);
const Led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',
};
const RGB = [Led.lampara1,Led.lampara2,Led.lampara3];
console.log(RGB);
const O_Error = {
    código: "const var",
}
console.log(O_Error.código);
const Grupo = {
    integrantes: ["What","is","this?"],
};
const integrantes = Grupo.integrantes;
console.log(integrantes);
const Impresora = {
    tinta: {
        rojo: 0, verde: 0, azul: 0,
    }
}
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);
const Movil = {
    especificaciones: "no estoy seguro"
}
const especificaciones = Movil.especificaciones
console.log(especificaciones);
Portatil.marca = "MSI";
console.log(Portatil);
Concierto.grupos.push("Guns N' Roses");
console.log(Concierto);
Concierto.fecha = "22/02/2023";
console.log(Concierto);
Concierto.fecha = new Date();
console.log(Concierto);
Grupo.integrantes.splice(1,1);
console.log(Grupo);
console.log(Grupo.integrantes.length);