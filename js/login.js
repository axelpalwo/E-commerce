var mostrarContraseña = document.getElementById("mostrarContraseña");
var contraseña = document.getElementById("floatingPassword");

mostrarContraseña.addEventListener("click", function() {
    if (contraseña.type === "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
  });

let logued_in = false
const button = document.getElementById("log-in-btn")

button.addEventListener("click",function(e){
    // Se extraen las cookies de Signupscript.js
    const nombres_cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("basenombres"))
    .split("=")[1];

    const pw_cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("basepw"))
    .split("=")[1];
    // Se les otorga a las cookies variables constantes para manipularlas
    const basenombres = JSON.parse(nombres_cookie);
    const basepw = JSON.parse(pw_cookie);
    
    const nombre = document.getElementById("username");
    const pass1 = document.getElementById("floatingPassword");
    // Comprueba que los campos no esten vacios & Busca en los arrays matcheos de Username y Contraseña
    if((nombre.value.length > 0) && (pass1.value.length >= 6)){
        for(let i = 0; i < basenombres.length; i++){
            if(basenombres[i].nombre_de_usuario == nombre.value){
                if((basenombres[i].numero_id == basepw[i].numero_id)&&(basepw[i].contrasena == pass1.value )){
                    console.log(`${nombre.value} ha iniciado sesión con exito`)
                    logued_in = true;
                    console.log("Estado del Log-In: ", logued_in)
                    document.cookie = `logued_in=${true}; path=/`
                    setTimeout(function(){
                        window.location = "index.html"},2000)
                } else {
                    alert("Lo sentimos, pero sus credenciales no son correctas")
                }
            } else {
                alert("Su nombre de usuario no coincide con nuestras bases de datos")
            }
        }
    } else {
        alert("Debe llenar los campos para iniciar sesión")
    }
})
/*button.addEventListener("click",function(e){
    logued_in = true
    console.log("la variable ha cambiado", logued_in)
    document.cookie = `logued_in=${true}; path=/`
})
*/