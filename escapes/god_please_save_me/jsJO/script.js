document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 25;
necesarios = 40;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*380);
   randNum2 =  Math.round(Math.random()*380);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 40) {
   	alert("Ganaste");
      window.location="VAMOO.html"
      
   }
}

function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("perdiste maestro");
      window.location = "mensaje.html"
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);

