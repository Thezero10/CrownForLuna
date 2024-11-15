const botonAmor = document.getElementById('boton-amor');
const audio = document.getElementById('myAudio');
const contenedorDiv = document.querySelector('.contenedor'); // Seleccionamos el contenedor donde se agregará el div

botonAmor.addEventListener('click', () => {
    audio.play();

    // Creamos un nuevo elemento div
    const nuevoDiv = document.createElement('div');
    // Agregamos el texto al div
    nuevoDiv.textContent = '¡Hoy es el día de coronar a la reina de mi castillo! Y quién mejor para serlo que tú, mi princesa. Aunque no sea una corona de oro ni piedras preciosas, espero que esta te recuerde lo mucho que te quiero. ¡A celebrar nuestro reinado juntos! MUA MUA MUA😘';
    // Agregamos una clase para darle estilo (opcional)
    nuevoDiv.classList.add('mensaje');

    // Agregamos el nuevo div al contenedor
    contenedorDiv.appendChild(nuevoDiv);
});