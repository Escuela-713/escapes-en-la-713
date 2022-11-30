function form(event) {
    let pass = document.getElementById("contraseña").value;
    let form = document.getElementById("form").value;
    if (pass == "0392") {
        alert('su respuesta es correcta')
        event.preventDefault()
        document.location="ok.html"
    }else{
        alert('su respuesta es incorrecta')
    }
} 