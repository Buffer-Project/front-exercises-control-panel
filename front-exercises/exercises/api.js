const url = "https://k2maan-moviehut.herokuapp.com/api/random"

function llamadaApi(){
    fetch(url)
    .then((resultado) => {
        return resultado.json()
    })
    .then((res) => {
        agregarALista(res)
    })
    .catch(e=> {
        console.log(e)
    })
}

function agregarALista(pelicula) {
    const lista = document.getElementById("listaPeliculas")
    lista.innerHTML = "<div><p>"+pelicula.name+"</p></div>"
}