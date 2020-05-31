var nombre_usuario = getElementById("nombre_user");
var nombre_friend1 = getElementById("nombre_friend1");
var nombre_friend2 = getElementById("nombre_friend2");

var seguidores = getElementById("seguidores_text");
var numero_seguidores = parseInt("seguidores");

var boton = getElementById("boton_user");
boton.addEventListener("click", clickBotonUser);

var iuno = document.getElementById("escena1")
var euno = iuno.getContext("2d");
var escena_uno = new Image();
escena_uno.src = "fondo.jpg";


var escena_dos = new Image();
escena_dos.src = "";

var escena_tres = new Image();
escena_tres.src = "";

var escena_cuatro = new Image();
escena_cuatro.src = "";

var escena_cinco = new Image();
escena_cinco.src = "";

var escena_seis = new Image();
escena_seis.src = "";

var escena_siete = new Image();
escena_siete.src = "";

var escena_ocho = new Image();
escena_ocho.src = "";
 

var escena1;


function clickBotonUser ()
{
    
    escena_uno.addEventListener("load", dibujar(euno.drawImage(iuno, 0, 0)));
    
}



