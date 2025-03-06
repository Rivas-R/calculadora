1- Que hace document.querySelector(".display"); ?

document.querySelector(".display");: Selecciona el primer elemento en el DOM con la clase display. Si no hay ningún elemento con esa clase, devuelve null.

2- Que hace const buttons = document.querySelectorAll("button"); ?

const buttons = document.querySelectorAll("button");: Selecciona todos los botones (<button>) en el documento y los guarda en una lista (NodeList).

3- Que hace buttonText = button.textContent; ?

buttonText = button.textContent;: Obtiene el texto visible dentro de un botón y lo almacena en la variable buttonText.

4- Que hace y como funciona buttons.forEach((button) => { ...} ?

buttons.forEach((button) => { ... }): Itera sobre todos los botones en la lista buttons, ejecutando una función por cada botón.

5- Que hace y como funciona button.addEventListener("click", () => { } )

button.addEventListener("click", () => { }): Añade un "escuchador de eventos" al botón, ejecutando la función dentro de addEventListener cuando el botón es clickeado.