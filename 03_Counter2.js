// Escribe una función  createCounter. Debe aceptar un entero inicial  init. 
// Debería devolver un objeto con tres funciones.

// Las tres funciones son:

    // increment() aumenta el valor actual en 1 y luego lo devuelve.
    // decrement() reduce el valor actual en 1 y luego lo devuelve.
    // reset() establece el valor actual en  init y luego lo devuelve.

var createCounter = function(init) {
    let count = init;
    return{
        increment: () => ++init,
        decrement: () => --init,
        reset: () => init = count
    }
};