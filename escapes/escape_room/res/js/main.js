function form(event) {
    let opción = document.getElementById('select').value;
    if (opción == 8036){
        alert("respuesta correcta");
        event.preventDefault();
        window.location= "./reto2.html";
    }else{
        alert('la respuesta es incorrecta');
    };
};
function FORM2(event){
    let opción = document.getElementById("seleccion");
    let right = "2";
    if (opción == right){
        alert("su respuesta es correcta");
        event.preventDefault();
        window.location="./continuara.html";
    } else {
      alert('La respuesta es incorrecta');
      alert('Aqui te dejo una pista ;)')
      event.preventDefault();
      window.location="galeria.html"  
    }
};
   
    