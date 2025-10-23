//seleccionar el formulario
const formulario = document.querySelector("#contacto")

if(formulario){
    formulario.addEventListener("submit"),
    (Event)=>{
        //evitar que el formulario se envie 
            event.preventDefault();

            //obtener valores de mi formulario
            const Nombre=document.getElementById("Nombre").value;
            const Document=document.getElementById("Comentario").value;
            const Correo =document.getElementById("Correo").value;
            const Telefono =document.getElementById("Telefono").value;


            console.log ("Nombre", Nombre)
            console.log ("Correo", Correo)
            console.log ("Telefono", Telefono)
            console.log ("Comentario es", Document)
    
            alert("Hola " + nombre +
                "tu correo es " + correo +
                "tu motivo de contacto es: " + descripcion)
        }
} else {
    console.error("No se pudo encontrar el formulario con el ID #contacto")
}
    
