// Seleccionar el formulario
const formulario = document.querySelector("#contacto")

if (formulario) {
    formulario.addEventListener("submit",
        (event) => {
            //Evitar que el formulario se envie
            event.preventDefault();

            //Obtener los valores de mi formulario
            const nombre = document.getElementById("nombre").value;
            const descripcion = document.getElementById("mensaje").value;
            const correo = document.getElementById("Correo").value;
            const numero = document.getElementById("telefono").value;

            //Imprimir los valores por consola
            console.log("Nombre", nombre)
            console.log("Correo", correo)
            console.log("Celular", numero)
            console.log("Mensaje es", descripcion)

            alert("Hola " + nombre +
                "tu correo es " + correo +
                "tu motivo de contacto es: " + descripcion)
        })
} else {
    console.error("No se pudo encontrar el formulario con el ID #contacto")
}


