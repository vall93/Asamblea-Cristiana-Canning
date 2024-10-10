//funcion para acambiar las frases//
function cambiarFrase(){
    var frase1 = document.getElementById("frase1");
    var frase2 = document.getElementById("frase2");
    var frase3 = document.getElementById("frase3");

    if(frase1.style.display !== "none"){
        frase1.style.display = "none";
        frase2.style.display = "block";
    } else if(frase2.style.display !== "none"){
        frase2.style.display ="none";
        frase3.style.display = "block";
    } else{
        frase3.style.display = "none";
        frase1.style.display = "block";
    }
}
//esto hace que cambie la frase en segundos//
setInterval(cambiarFrase, 4000);


//funciones para mi boton volver arriba
function volverArriba() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Mostrar o ocultar el botón dependiendo de la posición de desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('volverArriba').style.display = 'block';
    } else {
        document.getElementById('volverArriba').style.display = 'none';
    }
};



document.addEventListener("DOMContentLoaded", function() {
  // Lista de palabras de mi index3
    var palabras = ["AMA", "CUIDA", "PERDONA", "AYUDA SIEMPRE"];
  
    var indice = 0;
  
    // Función para cambiar la palabra cada 3 segundos
    function cambiarPalabra() {
      document.getElementById("palabraCambiante").textContent = palabras[indice];
      indice = (indice + 1) % palabras.length;
    }
  
    // Iniciar el cambio de palabra cada 3 segundos
    setInterval(cambiarPalabra, 3000);
  });

  //año para el footer
  document.getElementById("year").innerHTML = new Date().getFullYear();
