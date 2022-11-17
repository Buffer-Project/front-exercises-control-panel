let cartelExito = document.getElementsByClassName("success-message-container")[0]
let cartelError = document.getElementsByClassName("error-message-container")[0]

function login() {
    let username = document.getElementById("campo-usuario").value
    let password = document.getElementById("campo-password").value

    if(username === "ger" && password === "1234"){
        mostrarMensajeExito()
    } else {
        mostrarMensajeError()
    }
}

function mostrarMensajeExito(){
    cartelExito.classList.remove("hidden")
    cartelError.classList.add("hidden")
}

function mostrarMensajeError(){
    cartelExito.classList.add("hidden")
    cartelError.classList.remove("hidden")
}

function cerrarPopup(elemento){
    elemento.parentElement.classList.add("hidden")
}