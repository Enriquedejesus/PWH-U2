const img = document.getElementById("imagenMascota");
const span = document.getElementById("estatus");
const btn=document.getElementById("btnConsultar");
const contenedorImagenes=document.getElementById("contenedorImagenes")


/* 
btn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(respuesta => respuesta.json())
    .then(json =>{
        span.innerText = json.status;
        img.src = json.message;
    })
}) */

btn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((respuesta) => respuesta.json())
      .then((json) => {
       
        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = json.message;
        nuevaImagen.alt = "imagen perro";
        nuevaImagen.width = 200;
        nuevaImagen.height = 200;
  
       
       /*  const nuevoSpan = document.createElement("span");
        nuevoSpan.innerText = json.status;
   */
        
        contenedorImagenes.appendChild(nuevaImagen);
        contenedorImagenes.appendChild(nuevoSpan);
      });
  });
  
  
  
  
  
  