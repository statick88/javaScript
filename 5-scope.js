var miNombre = "Diego";

function nombre(){
    miNombre = "Juan";
    return miNombre
}

nombre()

console.log(miNombre)

function nombre(){
    var miApellido = "Saavedra";
    return miNombre + " " + miApellido;
}

nombre()
console.log(miNombre)
console.log(miApellido)

var miNombre = "Diego";

function nombre(usuario){
    miNombre = usuario;
    console.log(miNombre)
}

nombre("Maria")

console.log(`Hola ${miNombre}, como estás`);



var miNombre = "Diego";

function nombre(usuario){
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Pepito");

console.log(`Hola ${miNombre}, cómo estás?`);




function nombre(usuario){
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Martin");

console.log(`Hola ${miNombre}, cómo esta usted`);