code = 0;
function enterCode(event) {
  let code = document.forms["furms"]["code"].value;

  if (code == "ABRIR") {
alert("Acceso consedido")
alert("Abriendo puerta")
    event.preventDefault()
    window.location = "code.html"
  }
}
