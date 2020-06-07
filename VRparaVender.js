var genero = document.getElementById("generos");
var nombre_usuario = document.getElementById("nombre_user");
var nombre_amigas = document.getElementById("nombre_amiga");
var nombre_amigos = document.getElementById("nombre_amigo");

var nu = 0;
var nao = 0;
var naa = 0;

var print_texto_uno = document.getElementById("texto1");
var print_texto_dos = document.getElementById("texto2");
var print_texto_tres = document.getElementById("texto3");
var print_texto_cuatro = document.getElementById("texto4");
var print_texto_cinco = document.getElementById("texto5");
var print_texto_seis = document.getElementById("texto6");
var print_texto_siete = document.getElementById("texto7");
var print_texto_ocho = document.getElementById("texto8");
var print_texto_nueve = document.getElementById("texto9");
var print_texto_diez = document.getElementById("texto10");
var print_texto_once = document.getElementById("texto11");
var vacio_usuario = document.getElementById("usuario_vacio");



var seguidores = document.getElementById("seguidores_text");

var s = 0;

var boton = document.getElementById("boton_user");
boton.addEventListener("click", clickBotonUser);

var porcenaje_VR = 0.3;
var porcenaje_MR = 0.1;

var clientes_VR = 0
var clientes_MD = 0



/* ar iuno = document.getElementById("escena1");
var euno = iuno.getContext("2d");

var escena_uno = {
    url: "tile.webp",
    carga: false
}

escena_uno.imagen = new Image();
escena_uno.imagen.src = escena_uno.url;
escena_uno.imagen.addEventListener("load", cargarEscena);

function cargarEscena() {
    escena_uno.carga == true;
    dibujo();
}


function dibujo () 
{
    
    if(escena_uno.carga)
    {
        euno.drawImage(escena_uno.imagen, 0, 0);
    }
} */

var container = document.querySelector(".container");
boton.addEventListener("click", () => container.classList.add("mostrar-container"));

const menu = document.querySelector(".menu");
const burguerButton = document.querySelector("#burger_b");
const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation)


function menuShow () 
{
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
    } else {
        menu.classList.add("is-active")
    }
}

function validation(event) {
    if (event.matches) {
        burguerButton.addEventListener("click", menuShow)
    } else {
        burguerButton.removeEventListener("click", menuShow)
    }
}

validation(ipad);

function clickBotonUser ()
{
    nu = nombre_usuario.value
    nao = nombre_amigos.value
    naa = nombre_amigas.value
    s =  seguidores.value


    if(nu && nao && naa && s)
    {
        if(genero.value == "Sra.") 
        {
    
            vacio_usuario.innerHTML = ""            
            var escena_uno = document.getElementById("escena1");
            escena_uno.src = "IMAGES/Bloque-duda-mujer.png"
            print_texto_uno.innerHTML = ("Luego que <strong>" + nombre_usuario.value + "</strong> decide mejorar su producto y brindar una mejor experiencia a sus clientes, tambien deberá comunicárselos y así conseguir más ventas. <br/> <h2>Pero, ¿Cómo?</h2>")
            
            print_texto_dos.innerHTML = ("Despues de pensar un tiempo, <strong>" + nombre_usuario.value + "</strong> quiere experimentar con una campaña de realidad virtual. No obstante, para esta prueba no quiere pagar publicidad. Entonces decide invitar solo a sus followers.")
            var escena_dos = document.getElementById("escena2");
            escena_dos.src = "IMAGES/Bloque-idea-mujer.png"
            
            var escena_tres = document.getElementById("escena3");
            escena_tres.src = "IMAGES/Bloque-invitacion.png"
            print_texto_tres.innerHTML = ("Como <strong>" + nombre_usuario.value + "</strong> tiene su propia página web, decide realizar este evento de manera virtual. Y mientras desarrolla esta nueva experienciaVR en su página, envía invitaciones a sus <strong>" + seguidores.value + " prospectos.</strong>")
        
            var escena_cuatro = document.getElementById("escena4");
            escena_cuatro.src = "IMAGES/Bloque-juega-mujer.png"
            print_texto_cuatro.innerHTML = ("<strong>" + nombre_amigas.value + "</strong> recibe la invitación a una experiencia virtual dentro de una página web. Decide entrar y se encuentra con un escenario que detecta el movimiento de su celular. A medida el tiempo pasa, la experiencia virtual se torna más entretenida para <strong>" + nombre_amigas.value + "</strong> y el tiempo de permanencia en la página se alarga. A este tiempo se le conoce como <h2>GTR<h2>")
        
            var escena_cinco = document.getElementById("escena5");
            escena_cinco.src = "IMAGES/Bloque-juegaGAFASVR-hombre.png"
            print_texto_cinco.innerHTML = ("<strong>" + nombre_amigos.value + "</strong> también recibe la invitación a una experiencia virtual. Entra y se da cuenta que también puede verla con unas cardboard o gafas VR. Entonces recuerda que la empresa de su amigo y ex-socio, <strong>" + nombre_usuario.value + "</strong>  le ha regalado unas de estas gafas en otra ocasión. Las usa y vive una experiencia bastante inmersiva.")
        
            var escena_seis = document.getElementById("escena6");
            escena_seis.src = "IMAGES/Bloque-negocio.png"
            print_texto_seis.innerHTML = ("Durante la experiencia <strong>" + nombre_amigos.value + "</strong> se percata que su ex-socio, ha mejorado su producto, generando mejores beneficios y un mejor precio, razón por la que decide volver hacer negocios con <strong>" + nombre_usuario.value + "</strong>.")
        
            var escena_once = document.getElementById("escena11");
            escena_once.src = "IMAGES/Bloque-nuevas-visitas.png"
            print_texto_siete.innerHTML = ("Mientras tanto, <strong>" + nombre_amigas.value + "</strong> vuelve ocasionalmente a la página de <strong>" + nombre_usuario.value + "</strong> fortaleciendo su relación y una mayor posibilidad de compra.")
        
            var escena_siete = document.getElementById("escena7");
            escena_siete.src = "IMAGES/Bloque-seguidores-mujer.png"
            print_texto_ocho.innerHTML = ("Por otro lado, todos los followers de <strong>" + nombre_usuario.value + "</strong> viven la experienciaVR y como resultado tiene:")
        
            
            clientes_VR = Math.ceil(parseInt(seguidores.value) * porcenaje_VR);
            clientes_MD = Math.ceil(parseInt(seguidores.value) * porcenaje_MR);
            print_texto_nueve.innerHTML = ("<strong><h2>" + clientes_VR + "</br></h2></strong> nuevos clientes por campañaVR.")
            
            print_texto_once.innerHTML = ("<strong><h2>Recuerda:</br></h2></strong>El GTR o gaze-through-rate, es un valor que mide tiempo de gaze o mirada de un determinado producto en una experiencia VR de manera presencial o virtual.")
        }
    
        else if(genero.value == "Sr.") 
        {
            
            var escena_uno = document.getElementById("escena1");
            escena_uno.src = "IMAGES/Bloque-duda.png"
            print_texto_uno.innerHTML = ("Luego que <strong>" + nombre_usuario.value + "</strong> decide mejorar su producto y brindar una mejor experiencia a sus clientes, tambien deberá comunicárselos y así conseguir más ventas. <br/> <h2>Pero, ¿Cómo?</h2>")
            
            print_texto_dos.innerHTML = ("Despues de pensar un tiempo, <strong>" + nombre_usuario.value + "</strong> quiere experimentar con una campaña de realidad virtual. No obstante, para esta prueba no quiere pagar publicidad. Entonces decide invitar solo a sus followers.")
            var escena_dos = document.getElementById("escena2");
            escena_dos.src = "IMAGES/Bloque-idea.png"
            
            var escena_tres = document.getElementById("escena3");
            escena_tres.src = "IMAGES/Bloque-invitacion.png"
            print_texto_tres.innerHTML = ("Como <strong>" + nombre_usuario.value + "</strong> tiene su propia página web, decide realizar este evento de manera virtual. Y mientras desarrolla esta nueva experienciaVR en su página, envía invitaciones a sus <strong>" + seguidores.value + " prospectos.</strong>")
        
            var escena_cuatro = document.getElementById("escena4");
            escena_cuatro.src = "IMAGES/Bloque-juega-mujer.png"
            print_texto_cuatro.innerHTML = ("<strong>" + nombre_amigas.value + "</strong> recibe la invitación a una experiencia virtual dentro de una página web. Decide entrar y se encuentra con un escenario que detecta el movimiento de su celular. A medida el tiempo pasa, la experiencia virtual se torna más entretenida para <strong>" + nombre_amigas.value + "</strong> y el tiempo de permanencia en la página se alarga. A este tiempo se le conoce como <h2>GTR<h2>")
        
            var escena_cinco = document.getElementById("escena5");
            escena_cinco.src = "IMAGES/Bloque-juegaGAFASVR-hombre.png"
            print_texto_cinco.innerHTML = ("<strong>" + nombre_amigos.value + "</strong> también recibe la invitación a una experiencia virtual. Entra y se da cuenta que también puede verla con unas cardboard o gafas VR. Entonces recuerda que la empresa de su amigo y ex-socio, <strong>" + nombre_usuario.value + "</strong>  le ha regalado unas de estas gafas en otra ocasión. Las usa y vive una experiencia bastante inmersiva.")
        
            var escena_seis = document.getElementById("escena6");
            escena_seis.src = "IMAGES/Bloque-negocio.png"
            print_texto_seis.innerHTML = ("Durante la experiencia <strong>" + nombre_amigos.value + "</strong> se percata que su ex-socio, ha mejorado su producto, generando mejores beneficios y un mejor precio, razón por la que decide volver hacer negocios con <strong>" + nombre_usuario.value + "</strong>.")
        
            var escena_once = document.getElementById("escena11");
            escena_once.src = "IMAGES/Bloque-nuevas-visitas.png"
            print_texto_siete.innerHTML = ("Mientras tanto, <strong>" + nombre_amigas.value + "</strong> vuelve ocasionalmente a la página de <strong>" + nombre_usuario.value + "</strong> fortaleciendo su relación y una mayor posibilidad de compra.")
        
            var escena_siete = document.getElementById("escena7");
            escena_siete.src = "IMAGES/Bloque-seguidores-hombre.png"
            print_texto_ocho.innerHTML = ("Por otro lado, todos los followers de <strong>" + nombre_usuario.value + "</strong> viven la experienciaVR y como resultado tiene:")
        
            
            clientes_VR = Math.ceil(parseInt(seguidores.value) * porcenaje_VR);
            
            print_texto_nueve.innerHTML = ("<strong><h2>" + clientes_VR + "</br></h2></strong> nuevos clientes por campañaVR.")
            
            print_texto_once.innerHTML = ("<strong><h2>Recuerda:</br></h2></strong>El GTR o gaze-through-rate, es un valor que mide tiempo de gaze o mirada de un determinado producto en una experiencia VR de manera presencial o virtual.")
        }
    }

    else if(nu || nao || naa || s)
    {
        vacio_usuario.innerHTML = ("Por favor introduce todos <strong>tus datos</strong>");
        
        var escena_uno = document.getElementById("escena1");
        escena_uno.src = ""
        print_texto_uno.innerHTML = ("")
        
        print_texto_dos.innerHTML = ("")
        var escena_dos = document.getElementById("escena2");
        escena_dos.src = ""
        
        var escena_tres = document.getElementById("escena3");
        escena_tres.src = ""
        print_texto_tres.innerHTML = ("")
    
        var escena_cuatro = document.getElementById("escena4");
        escena_cuatro.src = ""
        print_texto_cuatro.innerHTML = ("")
    
        var escena_cinco = document.getElementById("escena5");
        escena_cinco.src = ""
        print_texto_cinco.innerHTML = ("")
    
        var escena_seis = document.getElementById("escena6");
        escena_seis.src = ""
        print_texto_seis.innerHTML = ("")
    
        var escena_once = document.getElementById("escena11");
        escena_once.src = ""
        print_texto_siete.innerHTML = ("")
    
        var escena_siete = document.getElementById("escena7");
        escena_siete.src = ""
        print_texto_ocho.innerHTML = ("")
        
        print_texto_nueve.innerHTML = ("")
            
        print_texto_once.innerHTML = ("")
        
    }



}



